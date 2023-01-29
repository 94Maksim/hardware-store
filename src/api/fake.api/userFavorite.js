const userFavorite = [];
if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", JSON.stringify(userFavorite));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(userFavorite);
        }, 200);
    });

const fetchUserFavoriteForUser = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("favorites")));
        }, 200);
    });
const add = (item) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const favorites = JSON.parse(localStorage.getItem("favorites"));
            const theSameItem = favorites.find((i) => i._id === item._id);
            if (theSameItem) {
                const newFavorites = favorites.filter(
                    (i) => i._id === item._id
                );
                theSameItem.amount = theSameItem.amount + item.amount;
                const newFavorite = {
                    ...theSameItem
                };
                newFavorites.push(newFavorite);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                resolve(newFavorites);
            } else {
                const newFavorite = {
                    ...item
                };
                favorites.push(newFavorite);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                resolve(newFavorite);
            }
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const favorites = JSON.parse(localStorage.getItem("favorites"));
            const newFavorites = favorites.filter((x) => x._id !== id);
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            resolve(newFavorites);
        }, 200);
    });
const removeAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const newFavorites = [];
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            resolve(newFavorites);
        }, 200);
    });
export default {
    fetchAll,
    fetchUserFavoriteForUser,
    add,
    remove,
    removeAll
};
