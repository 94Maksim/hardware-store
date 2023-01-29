export const getFilterResult = (filters, items) => {
    let filteredResult = [];

    if (
        filters.price.minPrice &&
        filters.price.maxPrice &&
        filters.subcategory &&
        filters.brand
    ) {
        return items.filter(
            (item) =>
                item.price >= filters.price.minPrice &&
                item.price <= filters.price.maxPrice &&
                item.brand === filters.brand &&
                item.subcategory === filters.subcategory
        );
    } else if (filters.subcategory && filters.brand) {
        return (filteredResult = items.filter(
            (item) =>
                item.subcategory === filters.subcategory &&
                item.brand === filters.brand
        ));
    } else if (filters.subcategory) {
        return (filteredResult = items.filter(
            (item) => item.subcategory === filters.subcategory
        ));
    } else if (filters.brand) {
        return (filteredResult = items.filter(
            (item) => item.brand === filters.brand
        ));
    } else if (filters.price.minPrice && filters.price.maxPrice) {
        return (filteredResult = items.filter(
            (item) =>
                item.price >= filters.price.minPrice &&
                item.price <= filters.price.maxPrice
        ));
    } else if (filteredResult.length === 0) {
        return (filteredResult = items);
    }
};
