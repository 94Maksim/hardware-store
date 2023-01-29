import React from "react";
import propTypes from "prop-types";

const GroupList = ({
    items,
    OnItemSelect,
    selectedItem,
    clearFilter,
    name,
    nameFilter
}) => {
    return (
        <div className="filters__block">
            <p>{nameFilter}:</p>
            <ul className="filters__block-list">
                {items.map((item) => (
                    <li
                        className={
                            "filters__block-list-li" +
                            (selectedItem === item ? "_active" : "")
                        }
                        onClick={() => OnItemSelect(name, item)}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
                <li
                    className="filters__block-list-li"
                    onClick={() => clearFilter(name)}
                >
                    Сбросить фильтр
                </li>
            </ul>
        </div>
    );
};

GroupList.propTypes = {
    items: propTypes.array.isRequired,
    OnItemSelect: propTypes.func,
    selectedItem: propTypes.oneOfType([propTypes.string, propTypes.object]),
    clearFilter: propTypes.func,
    name: propTypes.string.isRequired,
    nameFilter: propTypes.string
};

export default GroupList;
