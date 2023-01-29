import React, { useEffect, useState } from "react";
import "../styles/favorite.css";
import FavoriteList from "../components/page/favorite/favoriteList";
import API from "../api";
import LoadingPage from "../components/common/loadingPage";

const Favorite = () => {
    const [favorites, setFavorites] = useState();
    useEffect(() => {
        API.userFavorite.fetchAll().then((data) => setFavorites(data));
    }, []);
    useEffect(() => {
        API.userFavorite
            .fetchUserFavoriteForUser()
            .then((data) => setFavorites(data));
    }, [favorites]);
    const handleDeleteFavorite = (id) => {
        if (id === 0) {
            API.userFavorite.removeAll().then((data) => {
                setFavorites(data);
            });
        }
        API.userFavorite.remove(id).then((data) => {
            setFavorites(data);
        });
    };
    return favorites ? (
        <FavoriteList
            favorites={favorites}
            handleDeleteFavorite={handleDeleteFavorite}
        />
    ) : (
        <LoadingPage />
    );
};

export default Favorite;
