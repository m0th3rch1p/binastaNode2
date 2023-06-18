"use strict";
exports.__esModule = true;
var AccountMenu_1 = require("@/components/common/AccountMenu");
var DesktopHeader_1 = require("@/components/common/DesktopHeader");
var Footer_1 = require("@/components/common/Footer");
var MobileHeader_1 = require("@/components/common/MobileHeader");
var react_router_dom_1 = require("react-router-dom");
function DashboardLayout() {
    return (React.createElement(React.Fragment, null,
        React.createElement(DesktopHeader_1["default"], null),
        React.createElement(MobileHeader_1["default"], null),
        React.createElement("main", { className: "main pages" },
            React.createElement("div", { className: "page-header breadcrumb-wrap" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "breadcrumb" },
                        React.createElement("a", { href: "index.html", rel: "nofollow" },
                            React.createElement("i", { className: "fi-rs-home mr-5" }),
                            "Home"),
                        React.createElement("span", null),
                        " Pages ",
                        React.createElement("span", null),
                        " My Account"))),
            React.createElement("div", { className: "page-content pt-150 pb-150" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-lg-10 m-auto" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-3" },
                                    React.createElement(AccountMenu_1["default"], null)),
                                React.createElement("div", { className: "col-md-9" },
                                    React.createElement("div", { className: "tab-content account dashboard-content pl-50" },
                                        React.createElement(react_router_dom_1.Outlet, null))))))))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = DashboardLayout;
