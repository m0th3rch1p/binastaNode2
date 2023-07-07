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
var productsSlice_1 = require("@/store/reducers/productsSlice");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("@/store/hooks");
var react_1 = require("react");
var cartSlice_1 = require("@/store/reducers/cartSlice");
function Product() {
    var _a, _b;
    var params = react_router_dom_1.useParams();
    var _c = productsSlice_1.useFetchSingleProductQuery({ slug: params.slug }), product = _c.data, isLoading = _c.isLoading, isError = _c.isError;
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var dispatch = hooks_1.useAppDispatch();
    var itemInCart = cart.products.find(function (_a) {
        var product = _a.product;
        return product.slug === params.slug;
    });
    var _d = react_1.useState({
        variation: undefined,
        quantity: 1,
        inCart: itemInCart ? true : false
    }), selected = _d[0], setSelected = _d[1];
    react_1.useEffect(function () {
        if (itemInCart) {
            setSelected(function (state) { return (__assign(__assign({}, state), { quantity: itemInCart.quantity, variation: itemInCart.selectedVariation })); });
        }
        else if (product !== undefined && !itemInCart) {
            console.log(product);
            setSelected(function (state) {
                var _a;
                return (__assign(__assign({}, state), { quantity: 1, variation: (_a = product.variations) === null || _a === void 0 ? void 0 : _a[0] }));
            });
        }
    }, [itemInCart, product]);
    var onChangeQuantity = function (e) {
        e.preventDefault();
        if (parseInt(e.target.value) <= 1)
            return;
        setSelected(function (state) { return (__assign(__assign({}, state), { quantity: parseInt(e.target.value) })); });
    };
    var onAddCart = function (e) {
        if (selected.inCart)
            return false;
        dispatch(cartSlice_1.addCart({
            product: product,
            selectedVariation: selected.variation,
            quantity: selected.quantity
        }));
        setSelected(function (state) { return (__assign(__assign({}, state), { inCart: true })); });
    };
    var onSelectVariation = function (e) {
        var _a;
        e.preventDefault();
        var selectedId = parseInt(e.currentTarget.getAttribute("data-id"));
        var selectedVariation = (_a = product === null || product === void 0 ? void 0 : product.variations) === null || _a === void 0 ? void 0 : _a.find(function (variation) { return variation.id === selectedId; });
        setSelected(function (state) { return (__assign(__assign({}, state), { selectedVariation: selectedVariation })); });
        if (selected.inCart) {
            dispatch(cartSlice_1.changeSelectedVariation({ product_id: product === null || product === void 0 ? void 0 : product.id, selectedVariation: selectedVariation }));
        }
    };
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-12" },
            React.createElement("div", { className: "card mb-4" },
                React.createElement("div", { className: "card-body" }, !isLoading && product && selected.variation ? (React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-5" },
                        React.createElement("img", { src: "/" + ((_a = product.images) === null || _a === void 0 ? void 0 : _a[0].url), className: "w-100 rounded", alt: product === null || product === void 0 ? void 0 : product.name })),
                    React.createElement("div", { className: "col-md-7" },
                        React.createElement("div", { className: "d-flex justify-content-between align-items-start mt-4 mt-md-0" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "small text-muted mb-2" }, product === null || product === void 0 ? void 0 : product.category_name),
                                React.createElement("h2", null, product === null || product === void 0 ? void 0 : product.name),
                                React.createElement("p", null,
                                    React.createElement("span", { className: "badge bg-success" }, "In stock")),
                                React.createElement("p", null, product === null || product === void 0 ? void 0 : product.description),
                                React.createElement("div", { className: "d-flex gap-3 mb-3 align-items-center" },
                                    React.createElement("h4", { className: "mb-0" },
                                        "ksh.",
                                        selected.variation.buy_price * selected.quantity)),
                                React.createElement("div", { className: "d-flex gap-3 mb-3 align-items-center" },
                                    React.createElement("strong", { className: "mr-10" }, "Size / Weight: "),
                                    React.createElement("div", { className: "d-grid gap-2 d-md-block" }, (_b = product === null || product === void 0 ? void 0 : product.variations) === null || _b === void 0 ? void 0 : _b.map(function (variation) {
                                        var _a;
                                        return (React.createElement("button", { onClick: onSelectVariation, "data-id": variation.id, key: variation.id, className: "btn btn-sm btn-outline-primary mr-2 " + (itemInCart ? ((variation.id === itemInCart.selectedVariation.id) ? 'active' : '')
                                                : (((_a = product.variations) === null || _a === void 0 ? void 0 : _a[0].id) === variation.id ? 'active' : '')), type: "button" }, variation.variation));
                                    }))),
                                React.createElement("div", { className: "d-flex gap-2 mb-3" },
                                    React.createElement("i", { className: "bi bi-star-fill text-warning" }),
                                    React.createElement("i", { className: "bi bi-star-fill text-warning" }),
                                    React.createElement("i", { className: "bi bi-star-fill text-warning" }),
                                    React.createElement("i", { className: "bi bi-star-fill text-warning" }),
                                    React.createElement("i", { className: "bi bi-star-fill text-muted" }),
                                    React.createElement("span", null, "(3)")),
                                React.createElement("form", { className: "mt-4" },
                                    React.createElement("div", { className: "row row-cols-lg-auto" },
                                        React.createElement("div", { className: "col-12" },
                                            React.createElement("div", { className: "input-group" },
                                                React.createElement("input", { min: "1", type: "number", onChange: onChangeQuantity, className: "form-control", value: selected.quantity }),
                                                React.createElement("button", { className: "btn btn-primary", onClick: onAddCart, type: "button" }, selected.inCart ? 'In Cart' : 'Add to cart')))))))))) : (React.createElement(React.Fragment, null)))))));
}
exports["default"] = Product;
