import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import API from "../../../api";
import LoadingElement from "../../common/loadingElement";
import ProductCardForSearch from "../../common/product/productCardForSearch";

const Search = ({ showSearch, searchQuery }) => {
    const [products, setProducts] = useState();
    useEffect(() => {
        API.products.default.fetchAll().then((data) => setProducts(data));
    }, []);

    return (
        <div
            className="search"
            onClick={() => {
                showSearch(false);
            }}
        >
            {products ? (
                <div className="search__container">
                    {searchQuery ? (
                        <>
                            <h2 className="search__container-describtion">
                                Результат поиска:
                            </h2>
                            {products
                                .filter(
                                    (product) =>
                                        product.name
                                            .toLowerCase()
                                            .indexOf(
                                                searchQuery.toLowerCase()
                                            ) !== -1
                                )
                                .map((resultProduct) => {
                                    return (
                                        <ProductCardForSearch
                                            key={resultProduct._id}
                                            item={resultProduct}
                                        />
                                    );
                                })}
                        </>
                    ) : (
                        <>
                            <h2 className="search__container-describtion">
                                Рекоменуем:
                            </h2>
                            <ProductCardForSearch
                                item={
                                    products[
                                        Math.floor(
                                            Math.random() * products.length
                                        )
                                    ]
                                }
                            />
                            <ProductCardForSearch
                                item={
                                    products[
                                        Math.floor(
                                            Math.random() * products.length
                                        )
                                    ]
                                }
                            />
                            <ProductCardForSearch
                                item={
                                    products[
                                        Math.floor(
                                            Math.random() * products.length
                                        )
                                    ]
                                }
                            />
                            <ProductCardForSearch
                                item={
                                    products[
                                        Math.floor(
                                            Math.random() * products.length
                                        )
                                    ]
                                }
                            />
                        </>
                    )}
                </div>
            ) : (
                <LoadingElement />
            )}
        </div>
    );
};

Search.propTypes = {
    showSearch: propTypes.func,
    handleSearchQuery: propTypes.func,
    searchQuery: propTypes.string
};

export default Search;
