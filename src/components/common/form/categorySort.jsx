import React from "react";
import propTypes from "prop-types";

const CategorySort = ({ handleSortChange, className }) => {
    return (
        <form
            className={className}
            onChange={(e) => handleSortChange(e.target.value)}
        >
            <select name="selectSort" id="1">
                <option defaultValue={"default"} value="default">
                    Сортировка: по релевантности
                </option>
                <option value="name-desc">По алфавиту(по убыванию)</option>
                <option value="name-asc">По алфавиту(по возрастанию)</option>
                <option value="price-desc">По цене(по убыванию)</option>
                <option value="price-asc">По цене(по возрастанию)</option>
            </select>
        </form>
    );
};
CategorySort.propTypes = {
    handleSortChange: propTypes.func,
    className: propTypes.string
};

export default CategorySort;
