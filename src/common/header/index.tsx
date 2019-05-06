import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button} from './style'

interface Props {
    focused: boolean
}

class Header extends Component {
   state:Props = {
        focused: false
    }
    render() {
        const {focused} = this.state;
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
                        <NavSearch
                            className={focused ? 'focused': ''}
                        ></NavSearch>
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe614;</i>
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

export default Header
