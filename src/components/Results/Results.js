import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postReady} from './../../ducks/mainReducer';
import {handlePost} from './../../services/axiosServices';


class Results extends Component {


    componentDidMount() {
        console.log('mounted', this.props);
    }

    componentDidUpdate() {
        if(this.props.queryReady.confirm === false) {
            this.props.postReady({confirm: true});
        }
    }

    render() {
        return(
            <div>{}</div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {postReady, handlePost})(Results);