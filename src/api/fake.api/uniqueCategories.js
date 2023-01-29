import { products } from "./products.api";
const uniqueCategories = Array.from(
    new Set(
        products.map((product) => {
            return product.category;
        })
    )
);

export default { uniqueCategories };
