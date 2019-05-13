import React, {Component} from 'react';
import {connect} from 'react-redux'

class Topic extends Component<any, any> {
    render() {
        const {list} = this.props
        console.log(list);
        return (
            <div>
                Topic~
            </div>
        );
    }
}

const mapStateToProps = (state:any) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect() (Topic)
