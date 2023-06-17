"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_slick_1 = require("react-slick");
var useFetchProductCategories_1 = require("@/hooks/useFetchProductCategories");
var react_router_dom_1 = require("react-router-dom");
function ProductCategories() {
    var _a = useFetchProductCategories_1["default"](), categories = _a.categories, isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError;
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (React.createElement("section", { className: "popular-categories section-padding" },
        React.createElement("div", { className: "container wow animate__animated animate__fadeIn" },
            React.createElement("div", { className: "section-title" },
                React.createElement("div", { className: "title" },
                    React.createElement("h3", null, "Featured Categories")),
                React.createElement("div", { className: "slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow", id: "carausel-10-columns-arrows" })),
            React.createElement("div", { className: "carausel-10-columns-cover position-relative" },
                React.createElement("div", { className: "carausel-10-columns", id: "carausel-10-columns" },
                    React.createElement(react_slick_1["default"], __assign({}, settings), categories === null || categories === void 0 ? void 0 : categories.map(function (category) { return (React.createElement("div", { className: "card-2 bg-9 wow animate__animated animate__fadeInUp", key: category.slug, "data-wow-delay": ".1s" },
                        React.createElement("figure", { className: "img-hover-scale overflow-hidden" },
                            React.createElement(react_router_dom_1.Link, { to: "/shop?cat=" + category.slug },
                                React.createElement("img", { src: category.image_path, alt: "" }))),
                        React.createElement("h6", null,
                            React.createElement("a", { href: "shop-grid-right.html" }, category.name)),
                        React.createElement("span", null,
                            category.products_count,
                            " items"))); })))))));
}
exports["default"] = ProductCategories;
