import React from "react";
import propTypes from "prop-types";

const CheckBoxField = ({
    name,
    value,
    onChange,
    children,
    error,
    className,
    classNameLabel
}) => {
    const handleChange = () => {
        onChange({ target: { name: name, value: !value } });
    };
    return (
        <label className={className}>
            <input
                name={name}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label className={classNameLabel} htmlFor={name}></label>
            {children}
            <div>{error && <span>{error}</span>}</div>{" "}
        </label>
    );
};
CheckBoxField.propTypes = {
    name: propTypes.string,
    onChange: propTypes.func,
    value: propTypes.bool,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ]),
    error: propTypes.string,
    classNameLabel: propTypes.string,
    className: propTypes.string
};

export default CheckBoxField;
