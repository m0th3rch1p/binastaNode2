"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Related(_a) {
    var relatedProduct = _a.relatedProduct;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "row related-products" }, relatedProduct.map(function (relatedProduct) {
            var _a, _b, _c;
            return (React.createElement("div", { className: "col-lg-3 col-md-4 col-12 col-sm-6", key: relatedProduct.id },
                React.createElement("div", { className: "product-cart-wrap hover-up" },
                    React.createElement("div", { className: "product-img-action-wrap" },
                        React.createElement("div", { className: "product-img product-img-zoom" },
                            React.createElement(react_router_dom_1.Link, { to: "/product/" + relatedProduct.slug, tabIndex: 0 },
                                React.createElement("img", { className: "default-img", src: "" + ((_a = relatedProduct.images) === null || _a === void 0 ? void 0 : _a[0].url), alt: "" }),
                                React.createElement("img", { className: "hover-img", src: "" + ((_b = relatedProduct.images) === null || _b === void 0 ? void 0 : _b[1].url), alt: "" }))),
                        React.createElement("div", { className: "product-badges product-badges-position product-badges-mrg" },
                            React.createElement("span", { className: "hot" }, "Hot"))),
                    React.createElement("div", { className: "product-content-wrap" },
                        React.createElement("h2", null,
                            React.createElement(react_router_dom_1.Link, { to: "/product/" + relatedProduct.slug, tabIndex: 0 }, relatedProduct.name)),
                        React.createElement("div", { className: "rating-result", title: "90%" },
                            React.createElement("span", null, " ")),
                        React.createElement("div", { className: "product-price" },
                            React.createElement("span", null,
                                "ksh.", (_c = relatedProduct === null || relatedProduct === void 0 ? void 0 : relatedProduct.variations) === null || _c === void 0 ? void 0 :
                                _c[0].buy_price,
                                " "))))));
        }))));
}
exports["default"] = Related;
