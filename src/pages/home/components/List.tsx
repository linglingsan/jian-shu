import React, {Component} from 'react';
import {connect} from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style';
import {isTemplateElement} from '@babel/types';

class List extends Component<any, any>{
    render() {
        const {list} = this.props
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
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps)(List)
