"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var MobilePageHeader_1 = require("@/components/common/DesktopHeader");
var Sidebar_1 = require("@/components/common/Sidebar");
var Footer_1 = require("@/components/common/Footer");
function AuthenticatedLayout() {
    document.body.classList.remove("auth");
    return (React.createElement(React.Fragment, null,
        React.createElement(Sidebar_1["default"], null),
        React.createElement("div", { className: "layout-wrapper" },
            React.createElement(MobilePageHeader_1["default"], null),
            React.createElement("div", { className: "content" },
                React.createElement(react_router_dom_1.Outlet, null)),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = AuthenticatedLayout;
