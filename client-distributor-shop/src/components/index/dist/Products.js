"use strict";
exports.__esModule = true;
var hooks_1 = require("@/store/hooks");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var productsSlice_1 = require("@/store/reducers/productsSlice");
var react_router_dom_1 = require("react-router-dom");
var Loader_1 = require("../common/Loader");
function Products() {
    var dispatch = hooks_1.useAppDispatch();
    var _a = productsSlice_1.useFetchProductsQuery(), products = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess;
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var onAddCartProduct = function (e, product, selectedVariation) {
        dispatch(cartSlice_1.addCart({
            product: product,
            selectedVariation: selectedVariation,
            quantity: 1
        }));
    };
    return (React.createElement("section", { className: "product-tabs section-padding position-relative" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "section-title style-2 wow animate__ animate__fadeIn animated", style: {
                    visibility: "visible",
                    animationName: "fadeIn"
                } },
                React.createElement("h3", null, "Popular Products")),
            React.createElement("div", { className: "tab-content", id: "myTabContent" },
                React.createElement("div", { className: "tab-pane fade show active", id: "tab-one", role: "tabpanel", "aria-labelledby": "tab-one" },
                    React.createElement("div", { className: "row product-grid-4" }, products ? products.map(function (product) {
                        var _a, _b, _c, _d;
                        return (React.createElement("div", { className: "col-lg-1-5 col-md-4 col-12 col-sm-6", key: product.slug },
                            React.createElement("div", { className: "product-cart-wrap mb-30 wow animate__ animate__fadeIn animated", "data-wow-delay": ".1s", style: {
                                    visibility: "visible",
                                    animationDelay: "0.1s",
                                    animationName: "fadeIn"
                                } },
                                React.createElement("div", { className: "product-img-action-wrap" },
                                    React.createElement("div", { className: "product-img product-img-zoom" },
                                        React.createElement(react_router_dom_1.Link, { to: "/product/" + (product === null || product === void 0 ? void 0 : product.slug) },
                                            React.createElement("img", { className: "default-img", style: {
                                                    maxHeight: window.innerWidth > 750 ? 240 : "100%`"
                                                }, src: (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "", loading: "lazy" }),
                                            React.createElement("img", { className: "hover-img", src: (_c = (_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.url, alt: "", loading: "lazy" }))),
                                    React.createElement("div", { className: "product-badges product-badges-position product-badges-mrg" },
                                        React.createElement("span", { className: "hot" }, "Hot"))),
                                React.createElement("div", { className: "product-content-wrap" },
                                    React.createElement("div", { className: "product-category" },
                                        React.createElement(react_router_dom_1.Link, { to: "/product/" + (product === null || product === void 0 ? void 0 : product.slug) }, product.category_name)),
                                    React.createElement("h2", null,
                                        React.createElement(react_router_dom_1.Link, { to: "/product/" + (product === null || product === void 0 ? void 0 : product.slug) }, product.name)),
                                    React.createElement("div", { className: "product-card-bottom" },
                                        React.createElement("div", { className: "product-price" },
                                            React.createElement("span", null,
                                                "ksh.", (_d = product.variations) === null || _d === void 0 ? void 0 :
                                                _d[0].buy_price)),
                                        React.createElement("div", { className: "add-cart" },
                                            React.createElement("button", { className: "add", onClick: function (event) { var _a; return onAddCartProduct(event, product, (_a = product === null || product === void 0 ? void 0 : product.variations) === null || _a === void 0 ? void 0 : _a[0]); } },
                                                React.createElement("i", { className: "fi-rs-shopping-cart mr-5" }),
                                                cart.products.find(function (cartProduct) { return cartProduct.product.slug === product.slug; }) ? 'In Cart' : 'Add')))))));
                    }) : React.createElement(Loader_1["default"], null)))))));
}
exports["default"] = Products;
