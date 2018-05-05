import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionTypes from './redux/constants/actionTypes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'TITLE REACT APP'
        }
    }

    clickFunc = () => {
        this.props.dispatch({type: actionTypes.API_CALL_REQUEST})
    };

    render() {
        return (
            <div>
                {this.state.title}
                <Link to='/registration'>Registration</Link>
                <input type="button" onClick={this.clickFunc}/>
                {this.props.reducer.fetching
                    ? ('LOADED')
                    : (<img src={this.props.reducer.file} alt=""/>)}
            </div>
        )
    }
}

const mapState = (state) => ({...state});
export default connect(mapState)(App);