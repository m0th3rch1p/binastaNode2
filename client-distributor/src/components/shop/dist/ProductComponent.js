"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("@/store/hooks");
var cartSlice_1 = require("@/store/reducers/cartSlice");
function ProductComponent(props) {
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var dispatch = hooks_1.useAppDispatch();
    return (React.createElement("div", { className: "row g-4" }, props.products.map(function (product) {
        var _a, _b, _c;
        return (React.createElement("div", { key: product.id, className: "col-lg-4 col-md-6 col-sm-12" },
            React.createElement("div", { className: "card card-hover" },
                React.createElement(react_router_dom_1.Link, { to: "/product/" + product.slug },
                    React.createElement("img", { src: (_a = product.images) === null || _a === void 0 ? void 0 : _a[0].url, className: "card-img-top", style: {
                            maxHeight: "372px"
                        }, alt: "..." })),
                React.createElement("div", { className: "card-body" },
                    React.createElement(react_router_dom_1.Link, { to: "/product/" + product.slug },
                        React.createElement("h5", { className: "card-title mb-3" }, product.name)),
                    React.createElement("div", { className: "d-flex gap-3 mb-3 align-items-center" },
                        React.createElement("h4", { className: "mb-0" },
                            "ksh.", (_b = product.variations) === null || _b === void 0 ? void 0 :
                            _b[0].buy_price)),
                    React.createElement("h6", null,
                        "No.of Units: ", (_c = product.variations) === null || _c === void 0 ? void 0 :
                        _c[0].wholesale_min),
                    React.createElement("div", { className: "d-flex" },
                        React.createElement("button", { onClick: function (e) {
                                var _a;
                                e.preventDefault();
                                dispatch(cartSlice_1.addCart({ product: product, selectedVariation: (_a = product.variations) === null || _a === void 0 ? void 0 : _a[0], quantity: 1 }));
                            }, className: "btn btn-primary" }, cart.products.find(function (productInCart) { return productInCart.product.slug === product.slug; }) ? 'In Cart' : 'Add to Cart'))))));
    })));
}
;
exports["default"] = ProductComponent;
