import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    constructor() {
        super();
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

export default App;