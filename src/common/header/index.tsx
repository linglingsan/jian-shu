import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'

interface Props {
    header: any
    handleInputFocus: () => void
    handleInputBlur: () => void
}

class Header extends Component<any> {
    spinIcon: any

    getListArea() {
        const {focused, list, page, totalPage,mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []

        if (newList.length) {
            for (let i = (page -1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle
                        onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                    >
                        热门搜索
                        <SearchInfoSwitch>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur} = this.props
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() =>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch: any) => {
    return {
        handleInputFocus(list: any) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page: number, totalPage: number, spin: any) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)











