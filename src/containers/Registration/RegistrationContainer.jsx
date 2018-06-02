import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomInput from '../../components/CustomInput';
import style from './registration.scss';
import * as actionTypes from '../../redux/constants/actionTypes';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.error) {
            return {showModal: true}
        } else {
            return {...prevState}
        }
    };

    inputChangeHandler = (fieldName, e) => {
        this.setState({
            [fieldName]: e.target.value
        })
    };

    registrationHandler = () => {
        const newUser = {
            login: this.state.Login,
            password: this.state.Password,
            mail: this.state.Email
        };
        this.props.dispatch({
            type: actionTypes.REGISTRATION_USER,
            newUser
        })
    };

    handleOpenModal = () => {
        this.setState({showModal: true})
    };

    handleCloseModal = () => {
        this.setState({showModal: false})
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
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    // onRequestClose={this.handleCloseModal}
                    >
                    <p>Modal text!</p>
                    {this.props.error}
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.registrationReducer};
}

export default connect(mapStateToProps)(Registration);
