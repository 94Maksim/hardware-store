import { products } from "./products.api";
const uniqueSubCategories = Array.from(
    new Set(
        products.map((product) => {
            return product.subcategory;
        })
    )
);
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(uniqueSubCategories);
        }, 1000);
    });
export default { fetchAll };
