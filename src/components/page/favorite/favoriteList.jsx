import React from "react";
import propTypes from "prop-types";
import ItemBasketAndFavorite from "../../common/product/itemBasketAndFavorite";

const FavoriteList = ({ favorites, handleDeleteFavorite }) => {
    const total = favorites.reduce((prev, cur) => {
        return prev + cur.amount * cur.price;
    }, 0);

    return total ? (
        <div className="favorite-page">
            <h1>Избранное:</h1>
            <p className="favorite-page-clear">
                <button onClick={() => handleDeleteFavorite(0)}>
                    Очистить все
                </button>
            </p>
            <div className="favorite-container">
                {favorites.map((item) => (
                    <ItemBasketAndFavorite
                        key={item._id}
                        {...item}
                        deleteItem={handleDeleteFavorite}
                        basket={false}
                    />
                ))}
            </div>
        </div>
    ) : (
        <h1 className="favorite-page-null">Избранные товары отсутствуют</h1>
    );
};
FavoriteList.propTypes = {
    favorites: propTypes.array,
    handleDeleteFavorite: propTypes.func
};

export default FavoriteList;
