import React, {Component} from 'react';
import {connect} from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component<any, any> {
    render() {
        const {list} = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item: any) => (
                        <TopicItem key={item.get('id')}>
                            <img className='topic-pic' src={item.get('imgUrl')} alt=""/>
                            {item.get('title')}
                        </TopicItem>
                    ))

                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state: any) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps)(Topic)
