const userBasket = [];
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(userBasket));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(userBasket);
        }, 200);
    });

const fetchUserBasketForUser = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("products")));
        }, 200);
    });
const add = (item) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const products = JSON.parse(localStorage.getItem("products"));
            const theSameItem = products.find((i) => i._id === item._id);
            if (theSameItem) {
                const newProducts = products.filter((i) => i._id === item._id);
                theSameItem.amount = theSameItem.amount + item.amount;
                const newProduct = {
                    ...theSameItem
                };
                newProducts.push(newProduct);
                localStorage.setItem("products", JSON.stringify(products));
                resolve(newProducts);
            } else {
                const newProduct = {
                    ...item
                };
                products.push(newProduct);
                localStorage.setItem("products", JSON.stringify(products));
                resolve(newProduct);
            }
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const products = JSON.parse(localStorage.getItem("products"));
            const newProducts = products.filter((x) => x._id !== id);
            localStorage.setItem("products", JSON.stringify(newProducts));
            resolve(newProducts);
        }, 200);
    });
const removeAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const newProducts = [];
            localStorage.setItem("products", JSON.stringify(newProducts));
            resolve(newProducts);
        }, 200);
    });
export default {
    fetchAll,
    fetchUserBasketForUser,
    add,
    remove,
    removeAll
};
