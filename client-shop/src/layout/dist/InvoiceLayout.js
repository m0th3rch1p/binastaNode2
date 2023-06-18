"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function InvoiceLayout() {
    return (React.createElement("div", { className: "invoice invoice-content invoice-1" },
        React.createElement("div", { className: "back-top-home hover-up mt-30 ml-30" },
            React.createElement(react_router_dom_1.Link, { className: "hover-up", to: "/" },
                React.createElement("i", { className: "fi-rs-home mr-5" }),
                " Homepage")),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement("div", { className: "invoice-inner" },
                        React.createElement("div", { className: "invoice-info", id: "invoice_wrapper" },
                            React.createElement(react_router_dom_1.Outlet, null))))))));
}
exports["default"] = InvoiceLayout;
