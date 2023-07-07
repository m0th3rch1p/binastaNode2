"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Products_1 = require("@/components/shop/Products");
var Categories_1 = require("@/components/shop/Categories");
var PageHeader_1 = require("@/components/shop/PageHeader");
var productsSlice_1 = require("@/store/reducers/productsSlice");
var productCategorySlice_1 = require("@/store/reducers/productCategorySlice");
var react_1 = require("react");
var Loader_1 = require("@/components/common/Loader");
function Shop() {
    var _a = react_1.useState({
        offset: 0,
        per_page: 10,
        cat: null
    }), shopState = _a[0], setShopState = _a[1];
    var _b = productsSlice_1.useFetchProductsQuery(__assign({}, shopState)), products = _b.data, isProductsLoading = _b.isLoading;
    var categories = productCategorySlice_1.useFetchProductCategoriesQuery().data;
    var onPageNext = function (e) {
        e.preventDefault();
        setShopState(function (state) { return (__assign(__assign({}, state), { offset: state.offset + state.per_page })); });
    };
    var onPagePrev = function (e) {
        e.preventDefault();
        if (shopState.offset === 0)
            return;
        var newOffset = shopState.offset - shopState.per_page;
        if (newOffset <= 0)
            newOffset = 0;
        setShopState(function (state) { return (__assign(__assign({}, state), { offset: newOffset })); });
    };
    var selectCategory = function (category) {
        setShopState(function (state) { return (__assign(__assign({}, state), { cat: category })); });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(PageHeader_1["default"], null),
        React.createElement("div", { className: "container mb-30", style: {
                transform: "none"
            } },
            React.createElement("div", { className: "row flex-row-reverse", style: {
                    transform: "none"
                } },
                React.createElement("div", { className: "col-lg-4-5" },
                    React.createElement("div", { className: "shop-product-fillter" },
                        React.createElement("div", { className: "totall-product" },
                            React.createElement("p", null,
                                "We found ",
                                React.createElement("strong", { className: "text-brand" }, products === null || products === void 0 ? void 0 : products.length),
                                " items for you!")),
                        React.createElement("div", { className: "sort-by-product-area" },
                            React.createElement("div", { className: "sort-by-cover mr-10" },
                                React.createElement("div", { className: "sort-by-product-wrap" },
                                    React.createElement("div", { className: "sort-by" },
                                        React.createElement("span", null,
                                            React.createElement("i", { className: "fi-rs-apps" }),
                                            "Show:")),
                                    React.createElement("div", { className: "sort-by-dropdown-wrap" },
                                        React.createElement("span", null,
                                            " 50 ",
                                            React.createElement("i", { className: "fi-rs-angle-small-down" })))),
                                React.createElement("div", { className: "sort-by-dropdown" },
                                    React.createElement("ul", null,
                                        React.createElement("li", null,
                                            React.createElement("a", { className: "active", href: "#" }, "50")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "100")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "150")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "200")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "All"))))),
                            React.createElement("div", { className: "sort-by-cover" },
                                React.createElement("div", { className: "sort-by-product-wrap" },
                                    React.createElement("div", { className: "sort-by" },
                                        React.createElement("span", null,
                                            React.createElement("i", { className: "fi-rs-apps-sort" }),
                                            "Sort by:")),
                                    React.createElement("div", { className: "sort-by-dropdown-wrap" },
                                        React.createElement("span", null,
                                            " Featured ",
                                            React.createElement("i", { className: "fi-rs-angle-small-down" })))),
                                React.createElement("div", { className: "sort-by-dropdown" },
                                    React.createElement("ul", null,
                                        React.createElement("li", null,
                                            React.createElement("a", { className: "active", href: "#" }, "Featured")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Price: Low to High")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Price: High to Low")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Release Date")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Avg. Rating"))))))),
                    !isProductsLoading && products ? React.createElement(Products_1["default"], { products: products }) : React.createElement(Loader_1["default"], null),
                    React.createElement("div", { className: "pagination-area mt-20 mb-20" },
                        React.createElement("nav", { "aria-label": "Page navigation example" },
                            React.createElement("ul", { className: "pagination justify-content-middle" },
                                React.createElement("li", { className: "page-item" },
                                    React.createElement("button", { onClick: onPagePrev, className: "page-link" },
                                        React.createElement("i", { className: "fi-rs-arrow-small-left" }))),
                                React.createElement("li", { className: "page-item" },
                                    React.createElement("button", { onClick: onPageNext, className: "page-link" },
                                        React.createElement("i", { className: "fi-rs-arrow-small-right" }))))))),
                React.createElement(Categories_1["default"], { selectCategory: selectCategory, categories: categories })))));
}
exports["default"] = Shop;
