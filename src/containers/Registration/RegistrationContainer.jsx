import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomInput from '../../components/CustomInput';
import style from './registration.scss';
import * as actionTypes from '../../redux/constants/actionTypes';

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

    registrationHandler = () => {
        const user = {
            login: this.state.Login,
            password: this.state.Password,
            mail: this.state.Email
        };
        this.props.dispatch({
            type: actionTypes.REGISTRATION_USER,
            user
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
                <input type='submit' onClick={this.registrationHandler} value='Done'/>
            </div>
        )
    }
}

export default connect()(Registration);