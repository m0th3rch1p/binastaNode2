"use strict";
exports.__esModule = true;
var hooks_1 = require("@/store/hooks");
var react_router_dom_1 = require("react-router-dom");
function Products(_a) {
    var products = _a.products;
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "row product-grid" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
            var _a, _b, _c, _d, _e, _f;
            return (React.createElement("div", { className: "col-lg-1-5 col-md-4 col-12 col-sm-6", key: product.slug },
                React.createElement("div", { className: "product-cart-wrap mb-30" },
                    React.createElement("div", { className: "product-img-action-wrap" },
                        React.createElement("div", { className: "product-img product-img-zoom" },
                            React.createElement(react_router_dom_1.Link, { to: "/product/" + product.slug },
                                React.createElement("img", { className: "default-img", src: (_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url, style: {
                                        maxHeight: "177px"
                                    }, alt: "" }),
                                React.createElement("img", { className: "hover-img", src: (_d = (_c = product === null || product === void 0 ? void 0 : product.images) === null || _c === void 0 ? void 0 : _c[1]) === null || _d === void 0 ? void 0 : _d.url, alt: "" }))),
                        React.createElement("div", { className: "product-badges product-badges-position product-badges-mrg" },
                            React.createElement("span", { className: "hot" }, "Hot"))),
                    React.createElement("div", { className: "product-content-wrap" },
                        React.createElement("div", { className: "product-category" },
                            React.createElement("a", { href: "shop-grid-right.html" }, product.category_name)),
                        React.createElement("h2", null,
                            React.createElement(react_router_dom_1.Link, { to: "/product/" + product.slug }, product.name)),
                        React.createElement("div", { className: "product-rate-cover" },
                            React.createElement("div", { className: "product-rate d-inline-block" },
                                React.createElement("div", { className: "product-rating", style: {
                                        width: "90%"
                                    } })),
                            React.createElement("span", { className: "font-small ml-5 text-muted" }, " (4.0)")),
                        React.createElement("div", { className: "product-card-bottom" },
                            React.createElement("div", { className: "product-price" },
                                React.createElement("span", null,
                                    "ksh.", (_f = (_e = product === null || product === void 0 ? void 0 : product.variations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 :
                                    _f.buy_price)),
                            React.createElement("div", { className: "add-cart" },
                                React.createElement("a", { className: "add", href: "#0" },
                                    React.createElement("i", { className: "fi-rs-shopping-cart mr-5" }),
                                    cart.products.find(function (productInCart) { return productInCart.product.slug === product.slug; }) ? 'In Cart' : 'Add')))))));
        }))));
}
exports["default"] = Products;
