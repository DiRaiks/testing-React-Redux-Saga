import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'TITLE REACT APP'
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}

const mapState = ({title}) => ({title});
export default connect(mapState)(App);