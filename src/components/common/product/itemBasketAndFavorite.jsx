import React from "react";
import "./itemBasketAndFavorite.css";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemBasketAndFavorite = ({
    _id,
    name,
    price,
    amount,
    unit,
    category,
    deleteItem,
    basket
}) => {
    return (
        <div className="item-page__product">
            <Link
                to={`${category}/${_id}`}
                key={_id}
                className="item-page__product-container"
            >
                <div className="item-page__image">
                    <img
                        src={`../../../../../images/products/${_id}.jpeg`}
                        alt="Фото товара"
                    />
                </div>
                <h2>{name}</h2>
                <p>
                    <span className="item-page__product-name">Цена:</span>
                    {price} <span>руб/{unit}</span>
                </p>
                {basket ? (
                    <>
                        <p>
                            <span className="item-page__product-name">
                                Количество:
                            </span>
                            {amount}
                            <span> {unit}</span>
                        </p>
                        <p>
                            <span className="item-page__product-name">
                                Стоимость:
                            </span>
                            {price * amount} <span>руб</span>
                        </p>
                    </>
                ) : (
                    ""
                )}
            </Link>

            <button
                onClick={() => {
                    const id = _id;
                    deleteItem(id);
                }}
            >
                Удалить
            </button>
        </div>
    );
};
ItemBasketAndFavorite.propTypes = {
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    amount: propTypes.number.isRequired,
    unit: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    deleteItem: propTypes.func,
    basket: propTypes.bool.isRequired
};

export default ItemBasketAndFavorite;
