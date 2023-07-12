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
var react_1 = require("react");
var blogCategoriesSlice_1 = require("@/store/reducers/blogCategoriesSlice");
var react_data_table_component_1 = require("react-data-table-component");
var BlogCategoryForm_1 = require("@/components/blogCategories/BlogCategoryForm");
function BlogCategories() {
    var fetchedCategories = blogCategoriesSlice_1.useFetchBlogCategoriesQuery().data;
    var _a = react_1.useState({
        show: false,
        categories: []
    }), categoriesState = _a[0], setCategoriesState = _a[1];
    var columns = [
        {
            name: 'Name',
            selector: function (row) { return row.name; }
        },
        {
            name: 'Slug',
            selector: function (row) { return row.slug; }
        },
        {
            name: 'No.Of Blogs',
            selector: function (row) { return row.blogs_count; }
        }
    ];
    react_1.useEffect(function () {
        setCategoriesState(function (state) { return (__assign(__assign({}, state), { categories: fetchedCategories })); });
    }, [fetchedCategories, categoriesState.categories]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'card' },
            React.createElement("div", { className: 'card-header' },
                React.createElement("h5", null, "Blog Categories"),
                React.createElement(BlogCategoryForm_1["default"], { show: categoriesState.show }),
                React.createElement("button", { type: 'button', id: 'modalBtn', "data-bs-toggle": 'modal', "data-bs-target": '#exampleModal', className: 'btn btn-icon btn-primary', onClick: function () { return setCategoriesState(function (state) { return (__assign(__assign({}, state), { show: !categoriesState.show })); }); } },
                    React.createElement("i", { className: 'bi bi-plus-circle' }),
                    " Add Category",
                    ' ')),
            React.createElement("div", { className: 'card-body' },
                React.createElement(react_data_table_component_1["default"], { data: categoriesState.categories, columns: columns, responsive: true })))));
}
exports["default"] = BlogCategories;
