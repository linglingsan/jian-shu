import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import {actionCreators} from './store'
class Detail extends Component<any,  any> {

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: this.props.content}}
                />
            </DetailWrapper>
        );
    }
}

const mapStateToProps = (state:any) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatchToProps = (dispatch: any) => ({
    getDetail(id: number) {
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
