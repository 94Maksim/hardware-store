import React from "react";
import "./categories.css";
import API from "../../../api";
import propTypes from "prop-types";

const Categories = ({ showCategories }) => {
    const uniqueCategories = API.uniqueCategories.uniqueCategories;
    return (
        <div className="categories">
            <span onClick={() => showCategories(false)}>&#x2716;</span>
            <ul>
                {uniqueCategories &&
                    uniqueCategories.map((category, index) => (
                        <li key={index}>
                            <a href={"/" + category}>{category}</a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
Categories.propTypes = {
    showCategories: propTypes.func.isRequired
};

export default Categories;
