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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_google_autocomplete_1 = require("react-google-autocomplete");
var hooks_1 = require("@/store/hooks");
var addressSlice_1 = require("@/store/reducers/addressSlice");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
function Checkout() {
    var _this = this;
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var _a = addressSlice_1.useStoreAddressMutation(), storeAddress = _a[0], _b = _a[1], isStoreAddressLoading = _b.isLoading, isStoreAddressSuccess = _b.isSuccess;
    var _c = ordersSlice_1.usePlaceOrderMutation(), storeOrder = _c[0], _d = _c[1], isStoreOrderLoading = _d.isLoading, storeOrderSuccess = _d.isSuccess;
    var _e = react_1.useState({
        addressForm: {
            id: 0,
            address: '',
            phone_number: ''
        }
    }), checkoutState = _e[0], setCheckoutState = _e[1];
    var onAddressFormChange = function (e) {
        setCheckoutState(function (state) {
            var _a;
            return (__assign(__assign({}, state), { addressForm: __assign(__assign({}, state.addressForm), (_a = {}, _a[e.target.name] = e.target.value, _a)) }));
        });
    };
    var placeOrder = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var addressResponse, productVariations, orderResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storeAddress(checkoutState.addressForm).unwrap()];
                case 1:
                    addressResponse = _a.sent();
                    productVariations = [];
                    cart.products.forEach(function (product) {
                        productVariations.push([product.selectedVariation.id, product.quantity]);
                    });
                    return [4 /*yield*/, storeOrder({ distributor_address_id: addressResponse.id, product_variations: productVariations }).unwrap()];
                case 2:
                    orderResponse = _a.sent();
                    dispatch(cartSlice_1.resetCart());
                    navigate("/invoice/" + orderResponse.id);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-8" },
            React.createElement("div", { id: "checkout-form-wizard", role: "application", className: "wizard clearfix" },
                React.createElement("div", { className: "content clearfix" },
                    React.createElement("section", { className: "card card-body mb-0 body current", id: "checkout-form-wizard-p-0", role: "tabpanel", "aria-labelledby": "checkout-form-wizard-h-0", "aria-hidden": "false" },
                        React.createElement("div", { className: "mb-4" },
                            React.createElement("h6", { className: "card-title mb-3" }, "Delivery Information"),
                            React.createElement("div", { className: "text-muted" }, "Enter your desired delivery contact")),
                        React.createElement("div", { className: "row g-4 mb-3" },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("label", { className: "form-label" }, "Deliver Location"),
                                React.createElement(react_google_autocomplete_1["default"], { className: "form-control", apiKey: "AIzaSyBoR-KFcg8yHE4-x5xw4ixAQxYhkPbM4Tc", options: {
                                        componentRestrictions: { country: 'ke' }
                                    }, onPlaceSelected: function (place) {
                                        console.log(place);
                                        checkoutState.addressForm.address = place.formatted_address;
                                    } })),
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("label", { className: "form-label" }, "Phone Number"),
                                React.createElement("input", { type: "text", name: "phone_number", value: checkoutState.addressForm.phone_number, onChange: onAddressFormChange, className: "form-control" }))))))),
        React.createElement("div", { className: "col-md-4" },
            React.createElement("h5", { className: "mb-4" }, "Order Summary"),
            React.createElement("div", { className: "card mb-4" },
                React.createElement("div", { className: "card-body" },
                    React.createElement("h6", { className: "card-title mb-4" }, "Products"),
                    cart.products.map(function (product) {
                        var _a, _b;
                        return (React.createElement("div", { key: product.product.id, className: "list-group list-group-flush" },
                            React.createElement("div", { className: "list-group-item d-flex px-0" },
                                React.createElement(react_router_dom_1.Link, { to: "/product/" + product.product.slug, className: "me-3" },
                                    React.createElement("img", { src: (_b = (_a = product.product) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b[0].url, className: "rounded", width: "60", alt: product.product.name })),
                                React.createElement("div", null,
                                    React.createElement("h6", null, product.product.name),
                                    React.createElement("div", null,
                                        product.quantity,
                                        " x ksh.",
                                        product.selectedVariation.buy_price)),
                                React.createElement("div", { className: "text-end ms-auto" },
                                    "ksh.",
                                    product.quantity * product.selectedVariation.buy_price))));
                    }))),
            React.createElement("div", { className: "card mb-4" },
                React.createElement("div", { className: "card-body" },
                    React.createElement("div", { className: "row justify-content-center" },
                        React.createElement("div", { className: "col-4 text-end" },
                            React.createElement("strong", null, "Total :")),
                        React.createElement("div", { className: "col-4" },
                            React.createElement("strong", null,
                                "ksh.",
                                cart.total))),
                    React.createElement("div", { className: "row" },
                        React.createElement("button", { className: "btn btn-primary btn-md", onClick: placeOrder }, isStoreOrderLoading || isStoreAddressLoading ? "Placing order..." : "Place Order")))))));
}
exports["default"] = Checkout;
