"use strict";
exports.__esModule = true;
var productsSlice_1 = require("@/store/reducers/productsSlice");
function Products() {
    var products = productsSlice_1.useFetchProductsQuery({ per_page: 3, offset: 0 }).data;
    return (React.createElement("section", { className: "blog-area" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-8 offset-lg-2 section-wrapper text-center" },
                    React.createElement("h3", { className: "section-title" }, "Check Out Our Products"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet,sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, consetetur sadipscing elitr, Stet clita kasd gubergren"))),
            React.createElement("div", { className: "row grid" }, products === null || products === void 0 ? void 0 : products.map(function (product) {
                var _a, _b;
                return (React.createElement("div", { className: "col-md-4 grid-item animation", "data-animation": "fadeInUp", "data-animation-delay": "0.1s" },
                    React.createElement("div", { className: "single-blog" },
                        React.createElement("div", { className: "blog-thumb" },
                            React.createElement("img", { className: "", src: (_a = product.images) === null || _a === void 0 ? void 0 : _a[0].url, alt: "" })),
                        React.createElement("div", { className: "blog-text" },
                            React.createElement("h4", null,
                                React.createElement("a", { href: "https://shop.binasta.co.ke/products/" + product.slug }, product.name)),
                            React.createElement("p", null, (_b = product.description) === null || _b === void 0 ? void 0 :
                                _b.slice(0, 150),
                                "..."),
                            React.createElement("a", { className: "blog-link", href: "https://shop.binasta.co.ke/products/" + product.slug }, "Purchase")))));
            })))));
}
exports["default"] = Products;
