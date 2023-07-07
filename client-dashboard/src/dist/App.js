"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store");
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/fonts/"
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css";
// import "@/assets/dist/css/bootstrap-docs.css";
require("./App.css");
var AuthenticatedLayout_1 = require("./layout/AuthenticatedLayout");
var Index_1 = require("./views/Index");
var BlogCategories_1 = require("./views/BlogCategories");
var GuestLayout_1 = require("./layout/GuestLayout");
var Login_1 = require("./views/Login");
var ProductCategories_1 = require("./views/ProductCategories");
var Products_1 = require("./views/Products");
var Blog_1 = require("./views/Blog");
var ProtectedRoute_1 = require("./helpers/ProtectedRoute");
var Distributors_1 = require("./views/Distributors");
var SinlgeDistributor_1 = require("./views/SinlgeDistributor");
function App() {
    var user = store_1["default"].getState().user;
    return (react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(AuthenticatedLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Index_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/blog_categories", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(BlogCategories_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/product_categories", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(ProductCategories_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/products", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Products_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/blogs", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Blog_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/distributors", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(Distributors_1["default"], null)) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/distributor/:id", element: react_1["default"].createElement(ProtectedRoute_1["default"], { isLoggedIn: user.authenticated },
                                react_1["default"].createElement(SinlgeDistributor_1["default"], null)) })),
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(GuestLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) })))))));
}
exports["default"] = App;
