import React from "react";
import propTypes from "prop-types";
import { changeButtonStyle } from "../../utils/changeButtonStyle";
import ItemBasketAndFavorite from "../../common/product/itemBasketAndFavorite";

const BasketList = ({ basketProducts, handleDeleteProduct }) => {
    const total = basketProducts.reduce((prev, cur) => {
        return prev + cur.amount * cur.price;
    }, 0);

    return total ? (
        <div className="basket-page">
            <h1>Корзина:</h1>
            <div className="basket-container">
                <div className="basket-container__total">
                    <p className="basket-container__total-amount">
                        Итого: {total} руб
                    </p>
                    <button
                        onMouseEnter={(e) => changeButtonStyle(e)}
                        data-ripple="once"
                        className="basket-container__total-order"
                        onClick={() => console.log(basketProducts)}
                    >
                        Заказать
                    </button>
                    <button
                        onClick={() => handleDeleteProduct(0)}
                        className="basket-container__total-clear"
                    >
                        Очистить
                    </button>
                </div>
                {basketProducts.map((item) => (
                    <ItemBasketAndFavorite
                        key={item._id}
                        {...item}
                        deleteItem={handleDeleteProduct}
                        basket={true}
                    />
                ))}
            </div>
        </div>
    ) : (
        <h1 className="basket-page-null">Корзина пуста</h1>
    );
};
BasketList.propTypes = {
    basketProducts: propTypes.array,
    handleDeleteProduct: propTypes.func
};

export default BasketList;
