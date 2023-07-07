"use strict";
exports.__esModule = true;
var react_1 = require("react");
var shopping_empty_png_1 = require("@/assets/images/shopping-empty.png");
var react_router_dom_1 = require("react-router-dom");
function EmptyCheckout() {
    return (react_1["default"].createElement("div", { className: "page-content pt-150 pb-150" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-xl-8 col-lg-10 col-md-12 m-auto text-center" },
                    react_1["default"].createElement("p", { className: "mb-20" },
                        react_1["default"].createElement("img", { src: shopping_empty_png_1["default"], alt: "", className: "hover-up" })),
                    react_1["default"].createElement("h1", { className: "display-2 mb-30" }, "Cart Is Empty"),
                    react_1["default"].createElement("p", { className: "font-lg text-grey-700 mb-30" }, "You Haven't added anything to your cart. Visit Our Shop Below"),
                    react_1["default"].createElement(react_router_dom_1.Link, { className: "btn btn-default submit-auto-width font-xs hover-up mt-30", to: "/shop" },
                        react_1["default"].createElement("i", { className: "fi-rs-home mr-5" }),
                        " Back To Shop"))))));
}
exports["default"] = EmptyCheckout;
