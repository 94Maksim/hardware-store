import React, { useState, useEffect } from "react";
import ProductCard from "../../common/product/productCard";
import Slider from "./slider/slider";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import API from "../../../api";
import LoadingPage from "../../common/loadingPage";

const MainList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState();
    useEffect(() => {
        API.products.default.fetchAll().then((data) => setProducts(data));
    }, []);
    const pageSize = 8;
    if (products) {
        const theBestProducts = products.filter((product) => {
            return product.rate > 4.8;
        });

        const count = theBestProducts.length;
        const theBestProductsCrop = paginate(
            theBestProducts,
            currentPage,
            pageSize
        );
        const handlePageChange = (pageIndex) => {
            setCurrentPage(pageIndex);
        };

        return (
            <>
                <div className="main__container">
                    <Slider />
                    <h1 className="main__container-h1">Лучший выбор:</h1>
                    <div className="main__container-list">
                        {theBestProductsCrop.map((product) => (
                            <ProductCard key={product._id} {...product} />
                        ))}
                        {theBestProducts.length % 2 !== 0 && (
                            <div className="product-card-null"></div>
                        )}
                    </div>
                </div>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </>
        );
    } else return <LoadingPage />;
};

export default MainList;
