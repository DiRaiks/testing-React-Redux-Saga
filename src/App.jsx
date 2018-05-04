import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'TITLE REACT APP'
        }
    }

    clickFunc = () => {
        this.props.dispatch({type: "API_CALL_REQUEST"})
    };

    render() {
        return (
            <div>
                {this.state.title}
                <input type="button" onClick={this.clickFunc}/>
            </div>
        )
    }
}

const mapState = (state) => ({...state});
export default connect(mapState)(App);