"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function PageHeader() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'page-header mt-30 mb-50' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'archive-header' },
                    React.createElement("div", { className: 'row align-items-center' },
                        React.createElement("div", { className: 'col-xl-3' },
                            React.createElement("h1", { className: 'mb-15' }, "Snack"),
                            React.createElement("div", { className: 'breadcrumb' },
                                React.createElement(react_router_dom_1.Link, { to: '/', rel: 'nofollow' },
                                    React.createElement("i", { className: 'fi-rs-home mr-5' }),
                                    "Home"),
                                React.createElement("span", null),
                                " Shop")),
                        React.createElement("div", { className: 'col-xl-9 text-end d-none d-xl-block' })))))));
}
exports["default"] = PageHeader;
