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
var react_1 = require("react");
var useFetchProducts_1 = require("@/hooks/useFetchProducts");
var hooks_1 = require("@/store/hooks");
var react_router_dom_1 = require("react-router-dom");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var Loader_1 = require("@/components/common/Loader");
function Product() {
    var _a, _b, _c, _d;
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var dispatch = hooks_1.useAppDispatch();
    var params = react_router_dom_1.useParams();
    var itemInCart = cart.products.find(function (_a) {
        var product = _a.product;
        return product.slug === params.slug;
    });
    var _e = useFetchProducts_1.useFetchSingleProduct(params.slug), product = _e.product, isLoading = _e.isLoading, isSuccess = _e.isSuccess;
    var _f = react_1.useState({
        variation: itemInCart === null || itemInCart === void 0 ? void 0 : itemInCart.selectedVariation,
        quantity: itemInCart ? itemInCart.quantity : 1,
        inCart: itemInCart ? true : false
    }), selected = _f[0], setSelected = _f[1];
    react_1.useEffect(function () {
        if (!itemInCart) {
            setSelected(function (state) {
                var _a;
                return (__assign(__assign({}, state), { variation: (_a = product === null || product === void 0 ? void 0 : product.variations) === null || _a === void 0 ? void 0 : _a[0] }));
            });
        }
        else {
            setSelected(function (state) { return (__assign(__assign({}, state), { variation: itemInCart.selectedVariation, quantity: itemInCart.quantity, inCart: true })); });
        }
    }, [product, itemInCart]);
    var onHandleQtyDown = function (e) {
        e.preventDefault();
        if (selected.quantity <= 1)
            return false;
        if (selected.inCart) {
            dispatch(cartSlice_1.changeQuantity({ product_id: product === null || product === void 0 ? void 0 : product.id, quantity: --selected.quantity }));
            return;
        }
        else {
            setSelected(function (state) { return (__assign(__assign({}, state), { quantity: state.quantity-- })); });
        }
    };
    var onHandleQtyUp = function (e) {
        e.preventDefault();
        if (selected.inCart) {
            dispatch(cartSlice_1.changeQuantity({ product_id: product === null || product === void 0 ? void 0 : product.id, quantity: ++selected.quantity }));
        }
        else {
            setSelected(function (state) { return (__assign(__assign({}, state), { quantity: state.quantity++ })); });
        }
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
    return (react_1["default"].createElement("div", { className: "container mb-30" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-xl-10 col-lg-12 m-auto" },
                react_1["default"].createElement("div", { className: "product-detail accordion-detail" }, !isLoading && product ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "row mb-50 mt-30" },
                        react_1["default"].createElement("div", { className: "col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5" },
                            react_1["default"].createElement("div", { className: "detail-gallery" },
                                react_1["default"].createElement("span", { className: "zoom-icon" },
                                    react_1["default"].createElement("i", { className: "fi-rs-search" })),
                                react_1["default"].createElement("div", { className: "product-image-slider" },
                                    react_1["default"].createElement("img", { src: "/" + ((_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a[0].url), alt: product === null || product === void 0 ? void 0 : product.name })))),
                        react_1["default"].createElement("div", { className: "col-md-6 col-sm-12 col-xs-12" },
                            react_1["default"].createElement("div", { className: "detail-info pr-30 pl-30" },
                                react_1["default"].createElement("span", { className: "stock-status out-stock" }, " Sale Off "),
                                react_1["default"].createElement("h2", { className: "title-detail" }, product === null || product === void 0 ? void 0 : product.name),
                                react_1["default"].createElement("div", { className: "product-detail-rating" },
                                    react_1["default"].createElement("div", { className: "product-rate-cover text-end" },
                                        react_1["default"].createElement("div", { className: "product-rate d-inline-block" },
                                            react_1["default"].createElement("div", { className: "product-rating", style: {
                                                    width: "90%"
                                                } })))),
                                react_1["default"].createElement("div", { className: "clearfix product-price-cover" },
                                    react_1["default"].createElement("div", { className: "product-price primary-color float-left" },
                                        react_1["default"].createElement("span", { className: "current-price text-brand" },
                                            "ksh.",
                                            selected.variation ? selected.variation.buy_price * selected.quantity : ((_b = product === null || product === void 0 ? void 0 : product.variations) === null || _b === void 0 ? void 0 : _b[0].buy_price) * selected.quantity))),
                                react_1["default"].createElement("div", { className: "short-desc mb-30" },
                                    react_1["default"].createElement("p", { className: "font-lg" }, product === null || product === void 0 ? void 0 : product.description)),
                                react_1["default"].createElement("div", { className: "attr-detail attr-size mb-30" },
                                    react_1["default"].createElement("strong", { className: "mr-10" }, "Size / Weight: "),
                                    react_1["default"].createElement("ul", { className: "list-filter size-filter font-small" }, (_c = product === null || product === void 0 ? void 0 : product.variations) === null || _c === void 0 ? void 0 : _c.map(function (variation) {
                                        var _a;
                                        return (react_1["default"].createElement("li", { key: variation.id, className: itemInCart ? ((variation.id === itemInCart.selectedVariation.id) ? 'active' : '')
                                                : (((_a = product.variations) === null || _a === void 0 ? void 0 : _a[0].id) === variation.id ? 'active' : '') },
                                            react_1["default"].createElement("a", { onClick: onSelectVariation, href: "#0", "data-id": variation.id }, variation.variation)));
                                    }))),
                                react_1["default"].createElement("div", { className: "detail-extralink mb-50" },
                                    react_1["default"].createElement("div", { className: "detail-qty border radius" },
                                        react_1["default"].createElement("a", { onClick: onHandleQtyDown, href: "#0", className: "qty-down" },
                                            react_1["default"].createElement("i", { className: "fi-rs-angle-small-down" })),
                                        react_1["default"].createElement("span", { className: "qty-val" }, selected.quantity),
                                        react_1["default"].createElement("a", { onClick: onHandleQtyUp, href: "#0", className: "qty-up" },
                                            react_1["default"].createElement("i", { className: "fi-rs-angle-small-up" }))),
                                    react_1["default"].createElement("div", { className: "product-extra-link2" },
                                        react_1["default"].createElement("button", { onClick: onAddCart, className: "button button-add-to-cart" },
                                            react_1["default"].createElement("i", { className: "fi-rs-shopping-cart" }),
                                            selected.inCart ? 'In Cart' : 'Add to cart')))))),
                    react_1["default"].createElement("div", { className: "row mt-60" },
                        react_1["default"].createElement("div", { className: "col-12" },
                            react_1["default"].createElement("h2", { className: "section-title style-1 mb-30" }, "Related products")),
                        react_1["default"].createElement("div", { className: "col-12" },
                            react_1["default"].createElement("div", { className: "row related-products" }, (_d = product === null || product === void 0 ? void 0 : product.related) === null || _d === void 0 ? void 0 : _d.map(function (relatedProduct) {
                                var _a, _b, _c;
                                return (react_1["default"].createElement("div", { className: "col-lg-3 col-md-4 col-12 col-sm-6", key: relatedProduct.id },
                                    react_1["default"].createElement("div", { className: "product-cart-wrap hover-up" },
                                        react_1["default"].createElement("div", { className: "product-img-action-wrap" },
                                            react_1["default"].createElement("div", { className: "product-img product-img-zoom" },
                                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/product/" + relatedProduct.slug, tabIndex: 0 },
                                                    react_1["default"].createElement("img", { className: "default-img", src: "" + ((_a = relatedProduct.images) === null || _a === void 0 ? void 0 : _a[0].url), alt: "" }),
                                                    react_1["default"].createElement("img", { className: "hover-img", src: "" + ((_b = relatedProduct.images) === null || _b === void 0 ? void 0 : _b[1].url), alt: "" }))),
                                            react_1["default"].createElement("div", { className: "product-badges product-badges-position product-badges-mrg" },
                                                react_1["default"].createElement("span", { className: "hot" }, "Hot"))),
                                        react_1["default"].createElement("div", { className: "product-content-wrap" },
                                            react_1["default"].createElement("h2", null,
                                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/product/" + relatedProduct.slug, tabIndex: 0 }, relatedProduct.name)),
                                            react_1["default"].createElement("div", { className: "rating-result", title: "90%" },
                                                react_1["default"].createElement("span", null, " ")),
                                            react_1["default"].createElement("div", { className: "product-price" },
                                                react_1["default"].createElement("span", null,
                                                    "ksh.", (_c = relatedProduct === null || relatedProduct === void 0 ? void 0 : relatedProduct.variations) === null || _c === void 0 ? void 0 :
                                                    _c[0].buy_price,
                                                    " "))))));
                            })))))) : react_1["default"].createElement(Loader_1["default"], null))))));
}
exports["default"] = Product;
