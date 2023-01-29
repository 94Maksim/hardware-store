import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../../common/divider";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import propTypes from "prop-types";
import API from "../../../api";

const NavBarList = ({
    showCategories,
    showSearch,
    handleSearchQuery,
    searchQuery
}) => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setState(state + 1);
        }, 5000);
    }, [state]);
    useEffect(() => {
        API.userBasket.fetchUserBasketForUser().then(
            (data) => {
                const length = data.length;
                if (length && length > 0) {
                    setCount(length);
                } else setCount(0);
            },
            [state]
        );
    });
    return (
        <>
            <div
                className="navbar"
                onClick={({ target }) => {
                    if (target.tagName !== "INPUT") {
                        showSearch(false, " ");
                    }
                }}
            >
                <div className="navbar-container">
                    <div className="navbar__hamburger">
                        <input
                            id="navbar__toggle"
                            onChange={(e) => {
                                showCategories(e.target.checked);
                            }}
                            type="checkbox"
                        />
                        <label className="navbar__btn" htmlFor="navbar__toggle">
                            <span></span>
                        </label>
                    </div>
                    <div className="navbar-container__logo">
                        <Link to="/">
                            <img
                                src="../../images/logo/logo.webp"
                                alt="Логотип компании"
                            />
                        </Link>
                    </div>
                    <form className="navbar-container__search">
                        <button
                            type="button"
                            data-ripple="once"
                            onMouseEnter={changeButtonStyle}
                            onClick={() => {
                                showCategories(true);
                            }}
                        >
                            Каталог
                        </button>
                        <div>
                            <input
                                onFocus={() => showSearch(true)}
                                type="text"
                                placeholder="поиск..."
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => {
                                    handleSearchQuery(e);
                                }}
                                value={searchQuery}
                            />
                            <Link to="/search-page">
                                <button
                                    type="button"
                                    className="search__button"
                                >
                                    <img
                                        src="../../images/logo/search.png"
                                        alt="Поиск"
                                    />
                                </button>
                            </Link>
                        </div>
                    </form>
                    <div className="navbar-container__icons">
                        <div className="navbar-container__search-icon">
                            <Link to="/search">
                                <img
                                    src="../../images/logo/search.png"
                                    alt="Поиск"
                                    title="Поиск"
                                />
                            </Link>
                        </div>

                        <div className="navbar-container__login">
                            <Link to="/login">
                                <img
                                    src="../../images/logo/user.png"
                                    alt="Мой кабинет"
                                    title="Мой кабинет"
                                />
                            </Link>
                        </div>
                        <div className="navbar-container__favorite">
                            <Link to="/favorites">
                                <img
                                    src="../../images/logo/favorite.png"
                                    alt="Мой кабинет"
                                    title="Избранное"
                                />
                            </Link>
                        </div>

                        <div className="navbar-container__basket">
                            <Link to="/basket">
                                <img
                                    src="../../images/logo/basket.png"
                                    alt="Корзина"
                                    title="Корзина"
                                />
                                <span>{count}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
};

NavBarList.propTypes = {
    showCategories: propTypes.func,
    showSearch: propTypes.func,
    handleSearchQuery: propTypes.func,
    searchQuery: propTypes.string
};

export default NavBarList;
