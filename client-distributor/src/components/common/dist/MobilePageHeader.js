"use strict";
exports.__esModule = true;
var ShoppingCart_1 = require("./ShoppingCart");
function PageHeader() {
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "menu-toggle-btn" },
            React.createElement("a", { href: "#" },
                React.createElement("i", { className: "bi bi-list" }))),
        React.createElement("a", { href: "index.html", className: "logo" },
            React.createElement("img", { width: "100", src: "https://vetra.laborasyon.com/assets/images/logo.svg", alt: "logo" })),
        React.createElement("div", { className: "page-title" }, "Customers"),
        React.createElement("form", { className: "search-form" },
            React.createElement("div", { className: "input-group" },
                React.createElement("button", { className: "btn btn-outline-light", type: "button", id: "button-addon1" },
                    React.createElement("i", { className: "bi bi-search" })),
                React.createElement("input", { type: "text", className: "form-control", placeholder: "Search...", "aria-label": "Example text with button addon", "aria-describedby": "button-addon1" }),
                React.createElement("a", { href: "#", className: "btn btn-outline-light close-header-search-bar" },
                    React.createElement("i", { className: "bi bi-x" })))),
        React.createElement("div", { className: "header-bar ms-auto" },
            React.createElement("ul", { className: "navbar-nav justify-content-end" },
                React.createElement("li", { className: "nav-item" },
                    React.createElement("a", { href: "#", className: "nav-link nav-link-notify", "data-count": "2", "data-sidebar-target": "#notifications" },
                        React.createElement("i", { className: "bi bi-bell icon-lg" }))),
                React.createElement("li", { className: "nav-item dropdown" },
                    React.createElement(ShoppingCart_1["default"], null)),
                React.createElement("li", { className: "nav-item ms-3" },
                    React.createElement("button", { className: "btn btn-primary btn-icon" },
                        React.createElement("i", { className: "bi bi-plus-circle" }),
                        " Add Customers")))),
        React.createElement("div", { className: "header-mobile-buttons" },
            React.createElement("a", { href: "#", className: "search-bar-btn" },
                React.createElement("i", { className: "bi bi-search" })),
            React.createElement("a", { href: "#", className: "actions-btn" },
                React.createElement("i", { className: "bi bi-three-dots" })))));
}
exports["default"] = PageHeader;
