import React, { useState } from "react";
import propTypes from "prop-types";
import ProductCard from "../../common/product/productCard";
import GroupList from "./groupList";
import GroupInput from "./groupInput";
import CategorySort from "../../common/form/categorySort";

const PageCategoriesList = ({
    name,
    categoryCrop,
    category,
    handleFiltersSelect,
    selectedItem,
    clearFilter,
    handleSortChange
}) => {
    const [showFilters, setShowFilters] = useState("off");
    const subcategoryFiltersText = Array.from(
        new Set(
            category.map((c) => {
                return c.subcategory;
            })
        )
    );
    const brandFilters = Array.from(
        new Set(
            category.map((c) => {
                return c.brand;
            })
        )
    );
    const allPrices = category.map((i) => i.price);

    return (
        <div className="page-category">
            <div className={`filters filters-${showFilters}`}>
                <div className="filters-on__close">
                    <span
                        onClick={() => {
                            setShowFilters("off");
                            document.body.style.overflow = "auto";
                        }}
                    >
                        &#x2716;
                    </span>
                </div>
                {showFilters === "off" ? (
                    <h1>Фильтры:</h1>
                ) : (
                    <CategorySort
                        handleSortChange={handleSortChange}
                        className="filters-sort"
                    />
                )}
                <div className="filters__container">
                    <GroupList
                        items={subcategoryFiltersText}
                        OnItemSelect={handleFiltersSelect}
                        selectedItem={selectedItem.subcategory}
                        clearFilter={clearFilter}
                        name="subcategory"
                        nameFilter="Категория"
                    />
                    <GroupList
                        items={brandFilters}
                        OnItemSelect={handleFiltersSelect}
                        selectedItem={selectedItem.brand}
                        clearFilter={clearFilter}
                        name="brand"
                        nameFilter="Бренд"
                    />
                    <GroupInput
                        name="Цена"
                        setFilter={handleFiltersSelect}
                        placeholderMin={String(Math.min.apply(Math, allPrices))}
                        placeholderMax={String(Math.max.apply(Math, allPrices))}
                    />
                    <button
                        onClick={clearFilter}
                        className="filters__container-button"
                    >
                        Сбросить все
                    </button>
                </div>
            </div>

            <div className="category">
                <div className="page-category__filters-icon">
                    <button
                        onClick={() => {
                            setShowFilters("on");
                            document.body.style.overflow = "hidden";
                        }}
                    >
                        <img
                            src="../../../../images/logo/filter.png"
                            alt="Фильтры"
                        />
                    </button>
                </div>
                <CategorySort
                    handleSortChange={handleSortChange}
                    className="category-sort"
                />
                <div className="category__container">
                    <h1 className="category__container-h1">{name}:</h1>
                    {categoryCrop.length === 0 ? (
                        <div className="no-products">
                            Отсутсвует товар, соответствующий критериям!
                        </div>
                    ) : (
                        <div className="category__container-list">
                            {categoryCrop.map((cat) => (
                                <ProductCard
                                    key={cat._id}
                                    {...cat}
                                    category={name}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

PageCategoriesList.propTypes = {
    name: propTypes.string.isRequired,
    categoryCrop: propTypes.array.isRequired,
    category: propTypes.array.isRequired,
    handleFiltersSelect: propTypes.func,
    selectedItem: propTypes.oneOfType([propTypes.string, propTypes.object]),
    clearFilter: propTypes.func,
    handleSortChange: propTypes.func
};

export default PageCategoriesList;
