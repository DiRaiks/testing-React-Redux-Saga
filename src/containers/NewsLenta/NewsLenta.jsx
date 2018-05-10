import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as actionTypes from './redux/constants/actionTypes';

class NewsLenta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    };

    componentDidMount() {
        const images = this.importAll(require.context('../../../imgFolder', false, /\.(png|jpe?g|svg)$/));
        console.log('11111', images);
        this.setState({
            images
        })
    };

    importAll = (files) => {
        return files.keys().map(files)
    };

    render() {
        return (
            <div style={{width: '600px'}}>
                {this.state.images.map((img, index)=> {
                    return (
                        <div>
                            {index % 2 == 0
                                ? (<img style={{maxWidth: '300px', verticalAlign: 'top', float: 'left'}} key={`left${img}`} src={img} alt=""/>)
                                : (<img style={{maxWidth: '300px', verticalAlign: 'top', float: 'right'}} key={`right${img}`} src={img} alt=""/>)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapState = (state) => ({...state});
export default connect(mapState)(NewsLenta);