import React, {Component} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component<any, any>{
    render() {
        const {list, getMoreList, page} = this.props
        return (
            <div>
                {
                    list.map((item:any, index:number) => (
                        <ListItem key={index}>
                            <img className='pic' src={item.get('imgUrl')} alt=""/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch: any) => ({
    getMoreList(page: number) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
