import React from 'react';

const CustomInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type='text'
                   onChange={props.onChange.bind(this, props.label)}
                   placeholder={props.placeholder}
            />
        </div>
    )
};

export default CustomInput;