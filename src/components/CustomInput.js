import React from 'react';

const CustomInput = (props) => {
    return (
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            <input type={props.type}
                   id={props.label}
                   onChange={props.onChange.bind(this, props.label)}
                   placeholder={props.placeholder}
            />
        </div>
    )
};

export default CustomInput;