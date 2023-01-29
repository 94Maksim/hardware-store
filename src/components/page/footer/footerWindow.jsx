import React, { useState, useEffect } from "react";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import propTypes from "prop-types";
import TextField from "../../common/form/textField";
import CheckBoxField from "../../common/form/checkBoxField";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../utils/validatorConfig";

const FooterWindow = ({ showComponent }) => {
    const [data, setData] = useState({ email: "", personalData: false });
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <div className="footer__window">
            <form className="footer__form" onSubmit={handleSubmit}>
                <p className="close">
                    <span onClick={showComponent}>&#x2716;</span>
                </p>
                <h1>Подписка на рассылку</h1>
                <TextField
                    label="Email"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="footer__form-text"
                />
                {
                    <CheckBoxField
                        name="personalData"
                        value={data.personalData}
                        onChange={handleChange}
                        error={errors.personalData}
                        className="checkbox-ios"
                        classNameLabel="checkbox-ios-switch"
                    >
                        <p className="footer__form-p">
                            Согласен на{" "}
                            <a href="/">обработку персональных данных</a>{" "}
                        </p>
                    </CheckBoxField>
                }
                <button
                    disabled={!isValid}
                    type="submit"
                    data-ripple="once"
                    onMouseEnter={(e) => {
                        changeButtonStyle(e);
                    }}
                    onClick={showComponent}
                >
                    Подписаться
                </button>
            </form>
        </div>
    );
};
FooterWindow.propTypes = {
    showComponent: propTypes.func
};

export default FooterWindow;
