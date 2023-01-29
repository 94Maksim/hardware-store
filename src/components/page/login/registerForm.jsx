import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import TextField from "../../common/form/textField";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../utils/validatorConfig";
import CheckBoxField from "../../common/form/checkBoxField";
const LoginForm = ({ toggleFormType }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        personalData: ""
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
                    label="ФИО:"
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Иванов Иван Иванович"
                    onChange={handleChange}
                    error={errors.name}
                    className="login-page__text"
                />
                <TextField
                    label="Email:"
                    type="text"
                    name="email"
                    value={data.email}
                    placeholder="mail@mail.ru"
                    onChange={handleChange}
                    error={errors.email}
                    className="login-page__text"
                />
                <TextField
                    label="Телефон:"
                    type="tel"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    placeholder="+7 (999) 999-99-99"
                    onChange={handleChange}
                    error={errors.phoneNumber}
                    className="login-page__text"
                />
                <TextField
                    label="Пароль:"
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="Введите свой пароль..."
                    onChange={handleChange}
                    error={errors.password}
                    className="login-page__text"
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

                <div className="login-page__buttons">
                    <button
                        disabled={!isValid}
                        type="submit"
                        data-ripple="once"
                        onMouseEnter={(e) => {
                            changeButtonStyle(e);
                        }}
                    >
                        Зарегистрироваться
                    </button>
                    <span onClick={toggleFormType}>Вход</span>
                </div>
            </form>
        </div>
    );
};
LoginForm.propTypes = {
    toggleFormType: propTypes.func
};

export default LoginForm;
