import React, {Component} from 'react';

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