"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function AccountMenu() {
    return (React.createElement("div", { className: "dashboard-menu" },
        React.createElement("ul", { className: "nav flex-column", role: "tablist" },
            React.createElement("li", { className: "nav-item" },
                React.createElement(react_router_dom_1.Link, { className: "nav-link active", id: "orders-tab", "data-bs-toggle": "tab", to: "/account/orders", role: "tab", "aria-controls": "orders", "aria-selected": "true" },
                    React.createElement("i", { className: "fi-rs-shopping-bag mr-10" }),
                    "Orders")),
            React.createElement("li", { className: "nav-item" },
                React.createElement(react_router_dom_1.Link, { className: "nav-link", id: "address-tab", "data-bs-toggle": "tab", to: "/account/addresses", role: "tab", "aria-controls": "address", "aria-selected": "true" },
                    React.createElement("i", { className: "fi-rs-marker mr-10" }),
                    "My Address")),
            React.createElement("li", { className: "nav-item" },
                React.createElement("a", { className: "nav-link", href: "page-login.html" },
                    React.createElement("i", { className: "fi-rs-sign-out mr-10" }),
                    "Logout")))));
}
exports["default"] = AccountMenu;
