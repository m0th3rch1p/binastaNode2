"use strict";
exports.__esModule = true;
var mpesa_jpg_1 = require("@/assets/images/mpesa.jpg");
function Categories(_a) {
    var categories = _a.categories, selectCategory = _a.selectCategory;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "col-lg-1-5 primary-sidebar sticky-sidebar", style: {
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px"
            } },
            React.createElement("div", { className: "theiaStickySidebar", style: {
                    paddingTop: "0px",
                    paddingBottom: "1px",
                    position: "static",
                    transform: "none"
                } },
                React.createElement("div", { className: "sidebar-widget widget-category-2 mb-30" },
                    React.createElement("h5", { className: "section-title style-1 mb-30" }, "Category"),
                    React.createElement("ul", null, categories === null || categories === void 0 ? void 0 : categories.map(function (category) { return (React.createElement("li", null,
                        React.createElement("a", { href: "#0", onClick: function () { return selectCategory(category.slug); } },
                            " ",
                            React.createElement("img", { src: "/" + category.image_path, alt: "" }),
                            category.name),
                        React.createElement("span", { className: "count" }, category.products_count))); }))),
                React.createElement("div", { className: "banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none animated", style: {
                        visibility: "visible"
                    } },
                    React.createElement("img", { src: mpesa_jpg_1["default"], alt: "" }))))));
}
exports["default"] = Categories;
