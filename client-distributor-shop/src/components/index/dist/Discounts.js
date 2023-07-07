"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var productsSlice_1 = require("@/store/reducers/productsSlice");
function Discounts() {
    var _a = productsSlice_1.useFetchProductsQuery(), products = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess;
    return (React.createElement("section", { className: "section-padding mb-30" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp", "data-wow-delay": "0" },
                    React.createElement("h4", { className: "section-title style-1 mb-30 animated animated" }, "Top Selling"),
                    React.createElement("div", { className: "product-list-small animated animated" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
                        var _a, _b;
                        return (React.createElement("article", { key: product.slug, className: "row align-items-center hover-up" },
                            React.createElement("figure", { className: "col-md-4 mb-0" },
                                React.createElement(react_router_dom_1.Link, { to: "product/" + product.slug, state: { slug: product.slug } },
                                    React.createElement("img", { src: (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "" }))),
                            React.createElement("div", { className: "col-md-8 mb-0" },
                                React.createElement("h6", null,
                                    React.createElement(react_router_dom_1.Link, { to: "product/" + product.slug, state: { slug: product.slug } }, product.name)),
                                React.createElement("div", { className: "product-rate-cover" },
                                    React.createElement("div", { className: "product-rate d-inline-block" },
                                        React.createElement("div", { className: "product-rating", style: {
                                                width: "90%"
                                            } }))),
                                React.createElement("div", { className: "product-price" },
                                    React.createElement("span", null,
                                        "ksh.", (_b = product.variations) === null || _b === void 0 ? void 0 :
                                        _b[0].buy_price)))));
                    }))),
                React.createElement("div", { className: "col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp", "data-wow-delay": ".1s" },
                    React.createElement("h4", { className: "section-title style-1 mb-30 animated animated" }, "Trending Products"),
                    React.createElement("div", { className: "product-list-small animated animated" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
                        var _a, _b;
                        return (React.createElement("article", { key: product.slug, className: "row align-items-center hover-up" },
                            React.createElement("figure", { className: "col-md-4 mb-0" },
                                React.createElement("a", { href: "shop-product-right.html" },
                                    React.createElement("img", { src: (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "" }))),
                            React.createElement("div", { className: "col-md-8 mb-0" },
                                React.createElement("h6", null,
                                    React.createElement(react_router_dom_1.Link, { to: "product/" + product.slug, state: { slug: product.slug } }, product.name)),
                                React.createElement("div", { className: "product-rate-cover" },
                                    React.createElement("div", { className: "product-rate d-inline-block" },
                                        React.createElement("div", { className: "product-rating", style: {
                                                width: "90%"
                                            } }))),
                                React.createElement("div", { className: "product-price" },
                                    React.createElement("span", null,
                                        "ksh.", (_b = product === null || product === void 0 ? void 0 : product.variations) === null || _b === void 0 ? void 0 :
                                        _b[0].buy_price)))));
                    }))),
                React.createElement("div", { className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp", "data-wow-delay": ".2s" },
                    React.createElement("h4", { className: "section-title style-1 mb-30 animated animated" }, "Recently added"),
                    React.createElement("div", { className: "product-list-small animated animated" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
                        var _a, _b;
                        return (React.createElement("article", { key: product.slug, className: "row align-items-center hover-up" },
                            React.createElement("figure", { className: "col-md-4 mb-0" },
                                React.createElement("a", { href: "shop-product-right.html" },
                                    React.createElement("img", { src: (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "" }))),
                            React.createElement("div", { className: "col-md-8 mb-0" },
                                React.createElement("h6", null,
                                    React.createElement(react_router_dom_1.Link, { to: "product/" + product.slug, state: { slug: product.slug } }, product.name)),
                                React.createElement("div", { className: "product-rate-cover" },
                                    React.createElement("div", { className: "product-rate d-inline-block" },
                                        React.createElement("div", { className: "product-rating", style: {
                                                width: "90%"
                                            } }))),
                                React.createElement("div", { className: "product-price" },
                                    React.createElement("span", null,
                                        "ksh.", (_b = product === null || product === void 0 ? void 0 : product.variations) === null || _b === void 0 ? void 0 :
                                        _b[0].buy_price)))));
                    }))),
                React.createElement("div", { className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp", "data-wow-delay": ".3s" },
                    React.createElement("h4", { className: "section-title style-1 mb-30 animated animated" }, "Top Rated"),
                    React.createElement("div", { className: "product-list-small animated animated" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
                        var _a, _b;
                        return (React.createElement("article", { key: product.slug, className: "row align-items-center hover-up" },
                            React.createElement("figure", { className: "col-md-4 mb-0" },
                                React.createElement("a", { href: "shop-product-right.html" },
                                    React.createElement("img", { src: (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "" }))),
                            React.createElement("div", { className: "col-md-8 mb-0" },
                                React.createElement("h6", null,
                                    React.createElement(react_router_dom_1.Link, { to: "product/" + product.slug, state: { slug: product.slug } }, product.name)),
                                React.createElement("div", { className: "product-rate-cover" },
                                    React.createElement("div", { className: "product-rate d-inline-block" },
                                        React.createElement("div", { className: "product-rating", style: {
                                                width: "90%"
                                            } }))),
                                React.createElement("div", { className: "product-price" },
                                    React.createElement("span", null,
                                        "ksh.", (_b = product.variations) === null || _b === void 0 ? void 0 :
                                        _b[0].buy_price)))));
                    })))))));
}
exports["default"] = Discounts;
