"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Logo_1 = require("./Logo");
function MobileHeader() {
    return (React.createElement("div", { className: "mobile-header-active mobile-header-wrapper-style" },
        React.createElement("div", { className: "mobile-header-wrapper-inner" },
            React.createElement("div", { className: "mobile-header-top" },
                React.createElement("div", { className: "mobile-header-logo" },
                    React.createElement(react_router_dom_1.Link, { to: "/" },
                        React.createElement(Logo_1["default"], { width: 100, height: window.innerWidth <= 750 ? 50 : 100 }))),
                React.createElement("div", { className: "mobile-menu-close close-style-wrap close-style-position-inherit" },
                    React.createElement("button", { className: "close-style search-close" },
                        React.createElement("i", { className: "icon-top" }),
                        React.createElement("i", { className: "icon-bottom" })))),
            React.createElement("div", { className: "mobile-header-content-area" },
                React.createElement("div", { className: "mobile-header-info-wrap" },
                    React.createElement("div", { className: "single-mobile-header-info" },
                        React.createElement("a", { href: "page-login.html" },
                            React.createElement("i", { className: "fi-rs-user" }),
                            "Log In / Sign Up ")),
                    React.createElement("div", { className: "single-mobile-header-info" },
                        React.createElement("a", { href: "page-login.html" },
                            React.createElement("i", { className: "fi-rs-user" }),
                            "Log In / Sign Up ")),
                    React.createElement("div", { className: "single-mobile-header-info" },
                        React.createElement("a", { href: "#" },
                            React.createElement("i", { className: "fi-rs-headphones" }),
                            "(+01) - 2345 - 6789 "))),
                React.createElement("div", { className: "mobile-social-icon mb-50" },
                    React.createElement("h6", { className: "mb-15" }, "Follow Us"),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: "assets/imgs/theme/icons/icon-facebook-white.svg", alt: "" })),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: "assets/imgs/theme/icons/icon-twitter-white.svg", alt: "" })),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: "assets/imgs/theme/icons/icon-instagram-white.svg", alt: "" })),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: "assets/imgs/theme/icons/icon-pinterest-white.svg", alt: "" })),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: "assets/imgs/theme/icons/icon-youtube-white.svg", alt: "" }))),
                React.createElement("div", { className: "site-copyright" }, "Copyright 2022 \u00A9 Nest. All rights reserved. Powered by AliThemes.")))));
}
exports["default"] = MobileHeader;
