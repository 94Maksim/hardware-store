import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCardForSearch = ({ item }) => {
    return (
        <Link
            to={`/${item.category}/${item._id}`}
            key={item._id}
            className="seacrhcard"
        >
            <div className="searchcard__img">
                <img
                    src={`../../../../images/products/${item._id}.jpeg`}
                    alt="Картинка"
                />
            </div>
            <div className="searchcard__block">
                <h1>{item.name}</h1>
                <h2>
                    <span className="searchcard__block-price">
                        {item.price}
                    </span>
                    <span className="searchcard__block-unit">
                        руб/{item.unit}
                    </span>
                </h2>
            </div>
        </Link>
    );
};
ProductCardForSearch.propTypes = {
    item: propTypes.object
};

export default ProductCardForSearch;
