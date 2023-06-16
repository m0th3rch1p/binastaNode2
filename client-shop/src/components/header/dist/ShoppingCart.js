"use strict";
exports.__esModule = true;
var hooks_1 = require("@/store/hooks");
var react_router_dom_1 = require("react-router-dom");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var icon_cart_svg_1 = require("@/assets/images/icon-cart.svg");
function ShoppingCartComponent() {
    var dispatch = hooks_1.useAppDispatch();
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var onRemoveCartProduct = function (e, id) {
        dispatch(cartSlice_1.removeCart({ product_id: id }));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "header-action-icon-2" },
            React.createElement(react_router_dom_1.Link, { className: "mini-cart-icon", to: "/" },
                React.createElement("img", { alt: "Nest", src: icon_cart_svg_1["default"] }),
                React.createElement("span", { className: "pro-count white" }, cart.products.length)),
            React.createElement("div", { className: "cart-dropdown-wrap cart-dropdown-hm2" },
                React.createElement("ul", null, cart.products.map(function (_a) {
                    var _b;
                    var product = _a.product, selectedVariation = _a.selectedVariation, quantity = _a.quantity;
                    return (React.createElement("li", { key: product.slug },
                        React.createElement("div", { className: "shopping-cart-img" },
                            React.createElement(react_router_dom_1.Link, { to: "/product/" + product.slug },
                                React.createElement("img", { alt: product.name, src: "/" + ((_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b[0].url) }))),
                        React.createElement("div", { className: "shopping-cart-title" },
                            React.createElement("h4", null,
                                React.createElement(react_router_dom_1.Link, { to: "/products/" + product.slug }, product.name)),
                            React.createElement("h3", null,
                                React.createElement("span", null,
                                    quantity,
                                    " \u00D7 "),
                                "ksh.",
                                selectedVariation.buy_price)),
                        React.createElement("div", { className: "shopping-cart-delete" },
                            React.createElement("button", { style: { background: "white", border: 0 }, onClick: function (event) { return onRemoveCartProduct(event, product.id); } },
                                React.createElement("i", { className: "fi-rs-cross-small" })))));
                })),
                React.createElement("div", { className: "shopping-cart-footer" },
                    React.createElement("div", { className: "shopping-cart-total" },
                        React.createElement("h4", null,
                            "Total ",
                            React.createElement("span", null,
                                "ksh.",
                                cart.total))),
                    React.createElement("div", { className: "shopping-cart-button" },
                        React.createElement(react_router_dom_1.Link, { to: "/checkout" }, "Checkout")))))));
}
exports["default"] = ShoppingCartComponent;
