import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import "./productCard.css";
import { Link } from "react-router-dom";
import API from "../../../api";

const ProductCard = ({
    category,
    name,
    availability,
    price,
    unit,
    _id: id
}) => {
    const [count, setCount] = useState(1);
    const [favorites, setFavorites] = useState();
    useEffect(() => {
        API.userFavorite
            .fetchUserFavoriteForUser()
            .then((data) => setFavorites(data));
    });
    if (favorites) {
        const favoriteItem = favorites.find((i) => i._id === id);

        const handleChangeFavorite = (item) => {
            !favoriteItem
                ? API.userFavorite.add(item).then(() => {})
                : API.userFavorite.remove(item._id).then(() => {});
        };

        const handleAddProduct = (item) => {
            API.userBasket.add(item).then(() => {});
        };

        return (
            <div className="product-card" data-elem={id}>
                <div
                    className="product-card__image-favorite"
                    onClick={() => {
                        handleChangeFavorite({
                            _id: id,
                            name: name,
                            availability: availability,
                            price: price,
                            amount: count,
                            unit: unit,
                            category: category
                        });
                    }}
                >
                    <img
                        src={
                            "../../../images/logo/" +
                            (!favoriteItem
                                ? "favoriteCard.png"
                                : "favoriteCardRed.png")
                        }
                        alt="Избранное"
                        title={
                            !favoriteItem
                                ? "Добавить в избранное"
                                : "В избранном"
                        }
                    />
                </div>
                <Link to={category + "/" + id}>
                    <div className="product-card-container" data-elem={id}>
                        <div className="product-card__image" data-elem={id}>
                            <img
                                className="product-card__image-product"
                                src={`../../../images/products/${id}.jpeg`}
                                alt={"Здесь должно быть фото" + id}
                                data-elem={id}
                            />
                        </div>
                        <h3 data-elem={id}>{name}</h3>
                        <span className="product-card-vendor" data-elem={id}>
                            Артикул: {id}
                        </span>
                        <p className="product-card-name" data-elem={id}>
                            {availability === "В наличии" && (
                                <span
                                    data-elem={id}
                                    className="available-before"
                                >
                                    &#x25CF;
                                </span>
                            )}
                            <span
                                data-elem={id}
                                className={
                                    availability === "В наличии"
                                        ? "available"
                                        : "not-available"
                                }
                            >
                                {availability}
                            </span>
                        </p>
                        <h2 data-elem={id}>
                            {price} руб./{unit}
                        </h2>
                    </div>
                </Link>
                <div className="product-card__basket">
                    <div className="product-card__basket-counter">
                        <p
                            className="product-card__basket-p"
                            onClick={() => count >= 2 && setCount(count - 1)}
                        >
                            -
                        </p>
                        <p className="product-card__basket-count">{count}</p>
                        <p
                            className="product-card__basket-p"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </p>
                    </div>
                    <button
                        className="product-card__basket-button"
                        onMouseEnter={(e) => {
                            changeButtonStyle(e);
                        }}
                        onClick={() => {
                            handleAddProduct({
                                _id: id,
                                name: name,
                                availability: availability,
                                price: price,
                                amount: count,
                                unit: unit,
                                category: category
                            });
                        }}
                        data-ripple="once"
                    >
                        В корзину
                    </button>
                </div>
            </div>
        );
    }
};
ProductCard.propTypes = {
    name: propTypes.string.isRequired,
    availability: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    unit: propTypes.string.isRequired,
    _id: propTypes.string.isRequired,
    category: propTypes.string
};

export default ProductCard;
