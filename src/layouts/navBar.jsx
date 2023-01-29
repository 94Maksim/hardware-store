import React, { useState } from "react";
import propTypes from "prop-types";
import Categories from "../components/page/category/categories";
import NavBarList from "../components/page/navBar/navBarList";
import Search from "../components/page/search/search";
import "../styles/navBar.css";

const NavBar = ({ showFooterWindow }) => {
    const [isVisibleCategories, setVisibleCategories] = useState(false);
    const [isVisibleSearch, setVisibleSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    if (isVisibleCategories || isVisibleSearch || showFooterWindow) {
        document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    const handleShowCategories = (isChecked) => {
        setVisibleCategories(isChecked);
    };
    const handleShowSearch = (isChecked) => {
        setVisibleSearch(isChecked);
        if (!isChecked) {
            setSearchQuery("");
        }
    };
    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };

    return (
        <>
            {isVisibleCategories && (
                <Categories showCategories={handleShowCategories} />
            )}
            <NavBarList
                showCategories={handleShowCategories}
                showSearch={handleShowSearch}
                handleSearchQuery={handleSearchQuery}
                searchQuery={searchQuery}
            />
            {isVisibleSearch && (
                <Search
                    showSearch={handleShowSearch}
                    searchQuery={searchQuery}
                />
            )}
        </>
    );
};
NavBar.propTypes = {
    showPageSearch: propTypes.func,
    showFooterWindow: propTypes.bool
};

export default NavBar;
