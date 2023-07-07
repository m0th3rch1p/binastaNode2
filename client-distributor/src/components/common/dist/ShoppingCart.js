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
var hooks_1 = require("@/store/hooks");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function ShoppingCart() {
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState({
        show: false
    }), shoppingCartState = _a[0], setShoppingCartState = _a[1];
    var wrapperRef = react_1.useRef(null);
    react_1.useEffect(function () {
        function handleOutsideClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShoppingCartState(function (state) { return (__assign(__assign({}, state), { show: false })); });
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [wrapperRef]);
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: "#0", className: "nav-link nav-link-notify", "data-count": "3", onClick: function (e) {
                e.preventDefault();
                setShoppingCartState(function (state) { return (__assign(__assign({}, state), { show: !state.show })); });
            }, "data-bs-toggle": "dropdown" },
            React.createElement("i", { className: "bi bi-cart2 icon-lg" })),
        React.createElement("div", { ref: wrapperRef, className: "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 " + (shoppingCartState.show ? 'show' : ''), style: {
                margin: "0px",
                position: "absolute",
                inset: "0px auto auto 0px",
                transform: "translate(-265px, 90px)"
            } },
            React.createElement("h6", { className: "m-0 px-4 py-3 border-bottom" }, "Shopping Cart"),
            React.createElement("div", { className: "dropdown-menu-body", tabIndex: 3, style: {
                    overflow: "hidden",
                    outline: "none"
                } }, cart.products.map(function (product) {
                var _a;
                return (React.createElement("div", { key: product.product.id, className: "list-group list-group-flush" },
                    React.createElement("div", { className: "list-group-item d-flex align-items-center" },
                        React.createElement("a", { href: "#0", onClick: function (e) {
                                e.preventDefault();
                                dispatch(cartSlice_1.removeCart(product.product.id));
                            }, className: "text-danger me-3", title: "Remove" },
                            React.createElement("i", { className: "bi bi-trash" })),
                        React.createElement(react_router_dom_1.Link, { to: "/product/" + product.product.slug, className: "me-3 flex-shrink-0 " },
                            React.createElement("img", { src: (_a = product.product.images) === null || _a === void 0 ? void 0 : _a[0].url, className: "rounded", width: "60", alt: "..." })),
                        React.createElement("div", null,
                            React.createElement("h6", null, product.product.name),
                            React.createElement("div", null,
                                product.quantity,
                                " x ksh.",
                                product.selectedVariation.buy_price)))));
            })),
            React.createElement("h6", { className: "m-0 px-4 py-3 border-top small" },
                "Total : ",
                React.createElement("strong", { className: "text-primary" },
                    "ksh.",
                    cart.total)),
            React.createElement(react_router_dom_1.Link, { to: "/checkout", className: "m-3 btn btn-sm btn-primary" }, "Checkout"),
            React.createElement("div", { id: "ascrail2002", className: "nicescroll-rails nicescroll-rails-vr", style: {
                    width: "8px",
                    zIndex: "1000",
                    cursor: "default",
                    position: "absolute",
                    top: "0px",
                    left: "-8px",
                    height: "0px",
                    display: "none"
                } },
                React.createElement("div", { className: "nicescroll-cursors", style: {
                        position: "relative",
                        top: "0px",
                        float: "right",
                        width: "6px",
                        height: "0px",
                        backgroundColor: "rgb(66, 66, 66)",
                        border: "1px solid rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        padding: "box",
                        borderRadius: "5px"
                    } })),
            React.createElement("div", { id: "ascrail2002-hr", className: "nicescroll-rails nicescroll-rails-hr", style: {
                    height: "8px",
                    zIndex: "1000",
                    top: "-8px",
                    left: "0px",
                    position: "absolute",
                    cursor: "default",
                    display: "none"
                } },
                React.createElement("div", { className: "nicescroll-cursors", style: {
                        position: "absolute",
                        top: "0px",
                        height: "6px",
                        width: "0px",
                        backgroundColor: "rgb(66, 66, 66)",
                        border: "1px solid rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        borderRadius: "5px"
                    } })))));
}
exports["default"] = ShoppingCart;
