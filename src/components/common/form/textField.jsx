import React from "react";
import propTypes from "prop-types";

const TextField = ({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    className,
    error
}) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                autoFocus
                autoComplete="on"
            />
            <div>{error && <span>{error}</span>}</div>
        </div>
    );
};
TextField.propTypes = {
    label: propTypes.string,
    type: propTypes.string,
    name: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    className: propTypes.string,
    error: propTypes.string,
    placeholder: propTypes.string
};

export default TextField;
