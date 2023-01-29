import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/login.css";
import LoginForm from "../components/page/login/loginForm";
import RegisterForm from "../components/page/login/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="login-page">
            {formType === "register" ? (
                <RegisterForm toggleFormType={toggleFormType} />
            ) : (
                <LoginForm toggleFormType={toggleFormType} />
            )}
        </div>
    );
};

export default Login;
