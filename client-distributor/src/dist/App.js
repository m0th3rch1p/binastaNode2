"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var GuestLayout_1 = require("./layout/GuestLayout");
var Register_1 = require("./views/Register");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store");
var AuthenticatedLayout_1 = require("./layout/AuthenticatedLayout");
var Shop_1 = require("./views/Shop");
var Product_1 = require("./views/Product");
var Checkout_1 = require("./views/Checkout");
var Login_1 = require("./views/Login");
var Invoice_1 = require("./views/Invoice");
var Addresses_1 = require("./views/Addresses");
function App() {
    return (React.createElement(react_redux_1.Provider, { store: store_1["default"] },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { element: React.createElement(GuestLayout_1["default"], null) },
                    React.createElement(react_router_dom_1.Route, { path: "/register", element: React.createElement(Register_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(Login_1["default"], null) })),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(AuthenticatedLayout_1["default"], null) },
                    React.createElement(react_router_dom_1.Route, { path: "/addresses", element: React.createElement(Addresses_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/shop", element: React.createElement(Shop_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/product/:slug", element: React.createElement(Product_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/checkout", element: React.createElement(Checkout_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/invoice/:id", element: React.createElement(Invoice_1["default"], null) }))))));
}
exports["default"] = App;
