import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends Component<any> {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item: any) =>
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    )
                }
            </RecommendWrapper>
        )
    }
}

const mapStatetToProps = (state: any) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStatetToProps, null)(Recommend);
