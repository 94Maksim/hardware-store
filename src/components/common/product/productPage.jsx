import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./productPage.css";
import API from "../../../api";
import LoadingPage from "../loadingPage";
import { changeButtonStyle } from "../../utils/changeButtonStyle";

const ProductPage = ({ name, productId, history }) => {
    const [product, setProduct] = useState();
    const [description, setDescription] = useState();
    const [count, setCount] = useState(1);
    const [favorites, setFavorites] = useState();

    useEffect(() => {
        API.products.default
            .getById(productId)
            .then((data) => setProduct(data));
    }, []);
    useEffect(() => {
        API.description
            .getDescription(productId)
            .then((data) => setDescription(data));
    }, []);
    useEffect(() => {
        API.userFavorite
            .fetchUserFavoriteForUser()
            .then((data) => setFavorites(data));
    });
    const handleClick = () => {
        history.push(`/${name}`);
    };
    if (favorites && product) {
        const favoriteItem = favorites.find((i) => i._id === productId);

        const handleChabgeFavorite = (item) => {
            !favoriteItem
                ? API.userFavorite.add(item).then(() => {})
                : API.userFavorite.remove(item._id).then(() => {});
        };
        const handleAddProduct = (item) => {
            API.userBasket.add(item).then(() => {});
        };

        return (
            <div className="product-page">
                <div className="product-page__button">
                    <button onClick={handleClick}>Категория: {name}</button>
                </div>

                <div className="product-page-container">
                    <div className="product-page__product">
                        <h1>{product.name}</h1>
                        <div className="product-page__product-img">
                            <img
                                src={`../../../../images/products/${productId}.jpeg`}
                                alt={`Фото товара id:${productId}`}
                            />
                        </div>
                        <h4>Характеристики:</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Артикул:</td>
                                    <td>{productId}</td>
                                </tr>
                                <tr>
                                    <td>Единица измерения:</td>
                                    <td>
                                        {product.unit === "упа"
                                            ? "Упаковка"
                                            : product.unit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Основа:</td>
                                    <td>{product.material}</td>
                                </tr>
                                <tr>
                                    <td>Цвет:</td>
                                    <td>{product.color}</td>
                                </tr>
                                <tr>
                                    <td>Бренд:</td>
                                    <td>{product.brand}</td>
                                </tr>
                            </tbody>
                        </table>
                        {description ? (
                            <>
                                <h4>Описание:</h4>
                                {description.name.map((des, index) => (
                                    <p key={index}>{des}</p>
                                ))}
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="product-page__addtobasket">
                        <div className="product-page__addtobasket-container">
                            <h2>
                                {product.price} руб./{product.unit}
                            </h2>
                            <p
                                className={
                                    "product-page__addtobasket-" +
                                    (product.availability === "Нет в наличии"
                                        ? "notavalaible"
                                        : "avalaible")
                                }
                            >
                                {product.availability}
                            </p>
                            <div className="product-page__addtobasket-block">
                                <div className="product-page__addtobasket-counter">
                                    <p
                                        className="product-page__addtobasket-p"
                                        onClick={() =>
                                            count >= 2 && setCount(count - 1)
                                        }
                                    >
                                        -
                                    </p>
                                    <p className="product-page__addtobasket-count">
                                        {count}
                                    </p>
                                    <p
                                        className="product-page__addtobasket-p"
                                        onClick={() => setCount(count + 1)}
                                    >
                                        +
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        handleAddProduct({
                                            _id: productId,
                                            name: product.name,
                                            availability: product.availability,
                                            price: product.price,
                                            amount: count,
                                            unit: product.unit,
                                            category: product.category
                                        });
                                    }}
                                    className="product-page__addtobasket-button"
                                    onMouseEnter={(e) => {
                                        changeButtonStyle(e);
                                    }}
                                    data-ripple="once"
                                >
                                    В корзину
                                </button>
                                <p className="product-page__favorite">
                                    <button
                                        onClick={() =>
                                            handleChabgeFavorite({
                                                _id: productId,
                                                name: product.name,
                                                availability:
                                                    product.availability,
                                                price: product.price,
                                                amount: count,
                                                unit: product.unit,
                                                category: product.category
                                            })
                                        }
                                    >
                                        {!favoriteItem
                                            ? "Добавить в избранное"
                                            : "Удалить из избранного"}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return <LoadingPage />;
};
ProductPage.propTypes = {
    name: propTypes.string,
    productId: propTypes.string,
    history: propTypes.object
};

export default ProductPage;
