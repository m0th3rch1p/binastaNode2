"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store");
var ShopLayout_1 = require("./layout/ShopLayout");
var InvoiceLayout_1 = require("./layout/InvoiceLayout");
var Index_1 = require("./views/Index");
var Shop_1 = require("./views/Shop");
var Invoice_1 = require("./views/Invoice");
var Product_1 = require("./views/Product");
var Checkout_1 = require("./views/Checkout");
var DashboardLayout_1 = require("./layout/DashboardLayout");
var Orders_1 = require("./views/Orders");
var Addresses_1 = require("./views/Addresses");
var ProtectedRoute_1 = require("./components/ProtectedRoute");
function App() {
    var user = store_1["default"].getState().user;
    return (react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(ShopLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Index_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/shop", element: react_1["default"].createElement(Shop_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/product/:slug", element: react_1["default"].createElement(Product_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/checkout", element: react_1["default"].createElement(Checkout_1["default"], null) })),
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(InvoiceLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/invoice/:orderId", element: react_1["default"].createElement(Invoice_1["default"], null) })),
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(DashboardLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/account/orders", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Orders_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/account/addresses", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Addresses_1["default"], null)) })))))));
}
exports["default"] = App;
