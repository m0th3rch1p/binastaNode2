"use strict";
exports.__esModule = true;
var react_router_1 = require("react-router");
function ProtectedRoute(_a) {
    var isLoggedIn = _a.isLoggedIn, children = _a.children;
    if (!isLoggedIn) {
        return React.createElement(react_router_1.Navigate, { to: "/login", replace: true });
    }
    return children;
}
exports["default"] = ProtectedRoute;
