import React, {Component} from 'react';
import CustomInput from '../../components/CustomInput';

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    inputChangeHandler = (fieldName, e) => {
        this.setState({
            [fieldName]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <CustomInput
                    placeholder={'Enter Login'}
                    label={'Login'}
                    onChange={this.inputChangeHandler}
                />
            </div>
        )
    }
}

export default Registration;