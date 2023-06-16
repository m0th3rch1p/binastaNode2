"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var handleToggle = function () {
        setIsVisible(!isVisible);
    };
    return (React.createElement("div", { className: "site-header" },
        React.createElement("div", { className: "top-header" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6 col-md-8" },
                        React.createElement("ul", { className: "text-center text-md-left lft" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "mailto:info@binasta.co.ke" },
                                    React.createElement("i", { className: "icofont icofont-ui-message" }),
                                    "info@binasta.co.ke")),
                            React.createElement("li", null,
                                React.createElement("i", { className: "icofont iconfont-ui-timer" }),
                                "Mon-Sat 8.00- 18.00"))),
                    React.createElement("div", { className: "col-lg-6 col-md-4" },
                        React.createElement("ul", { className: "text-center text-md-right rgt" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "#" },
                                    React.createElement("i", { className: "icofont icofont-facebook" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#" },
                                    React.createElement("i", { className: "icofont iconfont-twitter" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#" },
                                    React.createElement("i", { className: "icofont iconfont-instagram" })))))))),
        React.createElement("nav", { className: "navbar" },
            React.createElement("div", { className: "container" },
                React.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand logo" },
                    React.createElement("img", { src: "../../assets/images/logo.png", alt: "", style: { width: '165px !important' } })),
                React.createElement("div", { className: "ml-auto main-menu" },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "https://shop.binasta.co.ke" }, "Shop")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/how-it-works" }, "How It Works")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/blog" }, "Blog")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/contact" }, "Contact Us")))),
                React.createElement("div", { className: "mobile-menu ml-auto" },
                    React.createElement("div", { className: "menu-click" },
                        React.createElement("span", null),
                        React.createElement("span", null),
                        React.createElement("span", null)))))));
}
exports["default"] = Header;
