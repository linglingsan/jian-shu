import React, {Component} from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component<any> {
    render() {
        console.log(this.props.list);
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item: any) => {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state: any) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);
