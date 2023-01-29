import React, { useState, useEffect } from "react";
import API from "../api";
import LoadingPage from "../components/common/loadingPage";
import BasketList from "../components/page/basket/basketList";
import "../styles/basket.css";

const Basket = () => {
    const [basketProducts, setBasketProducts] = useState();
    useEffect(() => {
        API.userBasket.fetchAll().then((data) => setBasketProducts(data));
    }, []);
    useEffect(() => {
        API.userBasket
            .fetchUserBasketForUser()
            .then((data) => setBasketProducts(data));
    }, [basketProducts]);
    const handleDeleteProduct = (id) => {
        if (id === 0) {
            API.userBasket.removeAll().then((data) => {
                setBasketProducts(data);
            });
        }
        API.userBasket.remove(id).then((data) => {
            setBasketProducts(data);
        });
    };
    return basketProducts ? (
        <BasketList
            basketProducts={basketProducts}
            handleDeleteProduct={handleDeleteProduct}
        />
    ) : (
        <LoadingPage />
    );
};

export default Basket;
