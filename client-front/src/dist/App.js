"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("@/store");
var FrontLayout_1 = require("./layout/FrontLayout");
var Index_1 = require("./views/Index");
var HowItWorks_1 = require("./views/HowItWorks");
var Contact_1 = require("./views/Contact");
var Blog_1 = require("./views/Blog");
require("@/assets/css/plugins.css");
require("@/assets/css/app.css");
var react_redux_1 = require("react-redux");
var SingleBlog_1 = require("./views/SingleBlog");
function App() {
    return (react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { element: react_1["default"].createElement(FrontLayout_1["default"], null) },
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Index_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/how-it-works", element: react_1["default"].createElement(HowItWorks_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/contact", element: react_1["default"].createElement(Contact_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/blog", element: react_1["default"].createElement(Blog_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/blog/:slug", element: react_1["default"].createElement(SingleBlog_1["default"], null) })))))));
}
exports["default"] = App;
