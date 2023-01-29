import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import TextField from "../../common/form/textField";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../utils/validatorConfig";
const LoginForm = ({ toggleFormType }) => {
    const [data, setData] = useState({
        email: "",
        passwordLogIn: ""
    });
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
        <div className="login-page__container">
            <h1>Вход:</h1>
            <form className="login-page__form" onSubmit={handleSubmit}>
                <TextField
                    label="Email:"
                    type="text"
                    name="email"
                    value={data.email}
                    placeholder="Введите свой email..."
                    onChange={handleChange}
                    error={errors.email}
                    className="login-page__text"
                />
                <TextField
                    label="Пароль:"
                    type="password"
                    name="passwordLogIn"
                    value={data.passwordLogIn}
                    placeholder="Введите свой пароль..."
                    onChange={handleChange}
                    error={errors.passwordLogIn}
                    className="login-page__text"
                />
                <div className="login-page__buttons">
                    <button
                        disabled={!isValid}
                        type="submit"
                        data-ripple="once"
                        onMouseEnter={(e) => {
                            changeButtonStyle(e);
                        }}
                    >
                        Войти
                    </button>
                    <span onClick={toggleFormType}>Регистрация</span>
                </div>
            </form>
        </div>
    );
};
LoginForm.propTypes = {
    toggleFormType: propTypes.func
};

export default LoginForm;
