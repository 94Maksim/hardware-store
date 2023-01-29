import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "../styles/pageCategory.css";
import ButtonComponent from "../components/common/buttonComponent";
import Pagination from "../components/common/pagination";
import { paginate } from "../components/utils/paginate";
import API from "../api/index";
import LoadingPage from "../components/common/loadingPage";
import PageCategoriesList from "../components/page/category/pageCategoriesList";
import { getFilterResult } from "../components/utils/getFilterResult";
import ProductPage from "../components/common/product/productPage";
import _ from "lodash";

const PageCategories = ({ name, match, history }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState();
    const [filtersSelect, setFiltersSelect] = useState({
        subcategory: undefined,
        brand: undefined,
        price: { minPrice: undefined, maxPrice: undefined }
    });
    const [sortBy, setSortBy] = useState({
        iter: "price",
        order: undefined
    });
    const productId = match.params.productId;

    useEffect(() => {
        API.products.default.fetchAll().then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [filtersSelect]);

    const handleFiltersSelect = (name, item) => {
        setFiltersSelect((current) => {
            if (name === "subcategory") {
                current.subcategory = item;
                return { ...current };
            } else if (name === "brand") {
                current.brand = item;
                return { ...current };
            } else if (name === "price") {
                current.price = item;
                return { ...current };
            }
            return { ...current };
        });
    };
    const clearFilter = (name) =>
        setFiltersSelect((current) => {
            if (name === "subcategory") {
                current.subcategory = undefined;
                return { ...current };
            } else if (name === "brand") {
                current.brand = undefined;
                return { ...current };
            } else {
                current.subcategory = undefined;
                current.brand = undefined;
                current.price.minPrice = undefined;
                current.price.maxPrice = undefined;
                return { ...current };
            }
        });

    if (products) {
        const pageSize = 9;

        const category = products.filter((product) => {
            return product.category === name;
        });

        const filteredResult = getFilterResult(filtersSelect, category);

        const handleSortChange = (sortedName) => {
            const names = sortedName.split("-");
            setSortBy({ iter: names[0], order: names[1] });
        };

        const sortedProducts = _.orderBy(
            filteredResult,
            [sortBy.iter],
            [sortBy.order]
        );

        const count = sortedProducts.length;
        const categoryCrop = paginate(sortedProducts, currentPage, pageSize);
        const handlePageChange = (pageIndex) => {
            setCurrentPage(pageIndex);
        };

        return (
            <>
                {productId ? (
                    <ProductPage
                        name={name}
                        productId={productId}
                        history={history}
                    />
                ) : (
                    <PageCategoriesList
                        name={name}
                        categoryCrop={categoryCrop}
                        category={category}
                        handleFiltersSelect={handleFiltersSelect}
                        selectedItem={filtersSelect}
                        clearFilter={clearFilter}
                        setFilter={handleFiltersSelect}
                        handleSortChange={handleSortChange}
                    />
                )}
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    display={productId}
                />
                <ButtonComponent />
            </>
        );
    } else return <LoadingPage />;
};

PageCategories.propTypes = {
    name: propTypes.string.isRequired,
    productId: propTypes.string,
    match: propTypes.object,
    history: propTypes.object
};

export default PageCategories;
