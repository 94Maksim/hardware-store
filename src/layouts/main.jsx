import React from "react";
import ButtonComponent from "../components/common/buttonComponent";
import MainList from "../components/page/main/mainList";
import "../styles/main.css";

const Main = () => {
    return (
        <>
            <div className="main">
                <MainList />
                <ButtonComponent />
            </div>
        </>
    );
};

export default Main;
