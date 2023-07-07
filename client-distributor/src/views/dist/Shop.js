"use strict";
exports.__esModule = true;
var ProductComponent_1 = require("@/components/shop/ProductComponent");
var productCategorySlice_1 = require("@/store/reducers/productCategorySlice");
var productsSlice_1 = require("@/store/reducers/productsSlice");
function Shop() {
    var _a = productsSlice_1.useFetchProductsQuery(), products = _a.data, isFetchProductsLoading = _a.isLoading, isFetchProductsError = _a.isError;
    var _b = productCategorySlice_1.useFetchProductCategoriesQuery(), categories = _b.data, isFetchProductCategoriesLoading = _b.isLoading, isFetchProductCategoriesError = _b.isError;
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-12" },
            React.createElement("div", { className: "card mb-4" },
                React.createElement("div", { className: "card-body" },
                    React.createElement("div", { className: "d-md-flex gap-4 align-items-center" },
                        React.createElement("div", { className: "d-none d-md-flex" }, "All Products")))),
            React.createElement("div", { className: "row g-4" },
                React.createElement(ProductComponent_1["default"], { products: products ? products : [] })),
            React.createElement("nav", { className: "mt-5", "aria-label": "Page navigation example" },
                React.createElement("ul", { className: "pagination justify-content-center" },
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#", "aria-label": "Previous" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00AB"))),
                    React.createElement("li", { className: "page-item active" },
                        React.createElement("a", { className: "page-link", href: "#" }, "1")),
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#" }, "2")),
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#" }, "3")),
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#", "aria-label": "Next" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00BB"))))))));
}
exports["default"] = Shop;
