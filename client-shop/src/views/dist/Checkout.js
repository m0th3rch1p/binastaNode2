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
var Address_1 = require("@/components/checkout/Address");
var CartItems_1 = require("@/components/checkout/CartItems");
var LoginForm_1 = require("@/components/checkout/LoginForm");
var RegisterForm_1 = require("@/components/checkout/RegisterForm");
var react_1 = require("react");
var userSlice_1 = require("@/store/reducers/userSlice");
var hooks_1 = require("@/store/hooks");
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
var addressSlice_1 = require("@/store/reducers/addressSlice");
var cartSlice_1 = require("@/store/reducers/cartSlice");
var react_router_dom_1 = require("react-router-dom");
function Checkout() {
    var _this = this;
    var dispatch = hooks_1.useAppDispatch();
    var navigate = react_router_dom_1.useNavigate();
    // const [addOrder , { isLoading: isAddOrderLoading, isSuccess: isAddOrderSuccess } ] = usePlaceOrderMutation();
    var _a = userSlice_1.useRegisterUserMutation(), registerUser = _a[0], _b = _a[1], isRegisterUserLoading = _b.isLoading, isRegisterUserSuccess = _b.isSuccess;
    var _c = addressSlice_1.useStoreAddressMutation(), storeAddress = _c[0], _d = _c[1], isStoreAddressLoading = _d.isLoading, isStoreAddressSuccess = _d.isSuccess;
    var _e = ordersSlice_1.usePlaceOrderMutation(), storeOrder = _e[0], _f = _e[1], isStoreOrderLoading = _f.isLoading, storeOrderSuccess = _f.isSuccess;
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    var cart = hooks_1.useAppSelector(function (state) { return state.cart; });
    var _g = react_1.useState({
        id: 0,
        user_id: 0,
        address: '',
        phone_number: ''
    }), addressForm = _g[0], setAddressForm = _g[1];
    var _h = react_1.useState({
        email: '',
        password: ''
    }), userForm = _h[0], setUserForm = _h[1];
    var _j = react_1.useState(false), showLoginForm = _j[0], setShowLoginForm = _j[1];
    react_1.useEffect(function () {
    }, [storeOrderSuccess]);
    var onAddressFormChange = function (e) {
        setAddressForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onUserFormChange = function (e) {
        setUserForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var placeOrder = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, addressResponse, productVariations, orderResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!user.authenticated) return [3 /*break*/, 2];
                    // Register User
                    if (!userForm.email || !userForm.password || !addressForm.address || !addressForm.phone_number)
                        return [2 /*return*/];
                    return [4 /*yield*/, registerUser(userForm).unwrap()];
                case 1:
                    response = _a.sent();
                    dispatch(userSlice_1.setAuthenticated(response.status));
                    _a.label = 2;
                case 2: return [4 /*yield*/, storeAddress(addressForm).unwrap()];
                case 3:
                    addressResponse = _a.sent();
                    productVariations = [];
                    cart.products.forEach(function (product) {
                        productVariations.push([product.selectedVariation.id, product.quantity]);
                    });
                    return [4 /*yield*/, storeOrder({ user_address_id: addressResponse.id, product_variations: productVariations }).unwrap()];
                case 4:
                    orderResponse = _a.sent();
                    dispatch(cartSlice_1.resetCart());
                    navigate("/invoice/" + orderResponse.id);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "container mb-80 mt-50" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-8 mb-40" },
                React.createElement("h1", { className: "heading-2 mb-10" }, "Checkout"),
                React.createElement("div", { className: "d-flex justify-content-between" },
                    React.createElement("h6", { className: "text-body" },
                        "There are ",
                        React.createElement("span", { className: "text-brand" }, cart.products.length),
                        " products in your cart")))),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-7" },
                !user.authenticated ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "row mb-50" },
                        React.createElement("div", { className: "col-lg-6 mb-sm-15 mb-lg-0 mb-md-3" },
                            React.createElement("div", { className: "toggle_info" },
                                React.createElement("span", null,
                                    React.createElement("i", { className: "fi-rs-user mr-10" }),
                                    React.createElement("span", { className: "text-muted font-lg" }, "Already have an account?"),
                                    " ",
                                    React.createElement("a", { href: "#0", onClick: function () { return setShowLoginForm(function (showForm) { return !showForm; }); }, "data-bs-toggle": "collapse", className: "collapsed font-lg", "aria-expanded": "false" }, "Click here to login"))),
                            React.createElement("div", { className: "panel-collapse collapse login_form " + (showLoginForm !== null && showLoginForm !== void 0 ? showLoginForm : 'show'), id: "loginform" },
                                React.createElement("div", { className: "panel-body" },
                                    React.createElement("p", { className: "mb-30 font-sm" }, "If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section."),
                                    React.createElement(LoginForm_1["default"], null))))),
                    React.createElement("div", { className: "row" },
                        React.createElement("h4", { className: "mb-30" }, "Account Details"),
                        React.createElement(RegisterForm_1["default"], { form: userForm, onChangeFn: onUserFormChange })))) : React.createElement(React.Fragment, null),
                React.createElement("div", { className: "row" },
                    React.createElement("h4", { className: "mb-30" }, "Delivery Details"),
                    React.createElement(Address_1["default"], { form: addressForm, onChangeFn: onAddressFormChange }))),
            React.createElement("div", { className: "col-lg-5" },
                React.createElement("div", { className: "border p-40 cart-totals ml-30 mb-50" },
                    React.createElement("div", { className: "d-flex align-items-end justify-content-between mb-30" },
                        React.createElement("h4", null, "Your Order"),
                        React.createElement("h6", { className: "text-muted" }, "Subtotal")),
                    React.createElement("div", { className: "divider-2 mb-30" }),
                    React.createElement("div", { className: "table-responsive order_table checkout" },
                        React.createElement(CartItems_1["default"], null))),
                React.createElement("div", { className: "payment ml-30" },
                    React.createElement("button", { onClick: placeOrder, className: "btn btn-fill-out btn-block mt-30", disabled: isRegisterUserLoading || isStoreAddressLoading || isStoreOrderLoading },
                        isRegisterUserLoading || isStoreAddressLoading || isStoreOrderLoading ? 'Placing Order...' : 'Place an Order',
                        React.createElement("i", { className: "fi-rs-sign-out ml-15" })))))));
}
exports["default"] = Checkout;
