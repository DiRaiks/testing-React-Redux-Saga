import React, {Component} from 'react';
import CustomInput from '../../components/CustomInput';
import style from './registration.scss';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    inputChangeHandler = (fieldName, e) => {
        this.setState({
            [fieldName]: e.target.value
        })
    };

    render() {
        const fields = [
                {label: 'Login', type: 'text'},
                {label: 'Password', type: 'password'},
                {label: 'Email', type: 'email'}
            ];
        return (
            <div className='registration'>
                {fields.map((field, index) => {
                    return (
                        <CustomInput
                            key={`${index}${field.label}`}
                            placeholder={`Enter ${field.label}`}
                            label={field.label}
                            type={field.type}
                            onChange={this.inputChangeHandler}
                        />
                    )
                })}
                <input type='submit' value='Done'/>
            </div>
        )
    }
}

export default Registration;