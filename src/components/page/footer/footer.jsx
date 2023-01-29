import React from "react";
import "../../../styles/footer.css";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import propTypes from "prop-types";

const Footer = ({ showComponent }) => {
    return (
        <div className="footer">
            <button
                data-ripple="once"
                className="footer__button"
                onMouseEnter={(e) => {
                    changeButtonStyle(e);
                }}
                onClick={showComponent}
            >
                <p>Подписаться на рассылку</p>
                <img src="../../images/footer-icons/letter.png" alt="" />
            </button>
            <div className="footer__social-icons">
                <ul className="footer__list">
                    <li>
                        <a
                            className="footer__list-vk"
                            type="button"
                            href="https://vk.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                        </a>
                    </li>
                    <li>
                        <a
                            className="footer__list-od"
                            type="button"
                            href="https://ok.ru/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                        </a>
                    </li>
                    <li>
                        <a
                            className="footer__list-tg"
                            type="button"
                            href="https://web.telegram.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__info">
                <div className="footer__info-text">
                    2022 © Hardware city - Интернет-магазин товаров для ремонта
                    и строительства
                </div>
                <div className="footer__info-icons">
                    <div>
                        <img
                            src="../../images/footer-icons/cash.png"
                            alt="cash"
                            title="Cash"
                        />
                    </div>
                    <div>
                        <img
                            src="../../images/footer-icons/mastercard.png"
                            alt="mastercard"
                            title="Mastercard"
                        />
                    </div>
                    <div>
                        <img
                            src="../../images/footer-icons/visa.png"
                            alt="visa"
                            title="Visa"
                        />
                    </div>
                    <div>
                        <img
                            src="../../images/footer-icons/mir.png"
                            alt="mir"
                            title="Mir"
                        />
                    </div>
                    <div>
                        <img
                            src="../../images/footer-icons/sber.png"
                            alt="sber"
                            title="Sber"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
Footer.propTypes = {
    showComponent: propTypes.func
};

export default Footer;
