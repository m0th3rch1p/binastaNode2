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
var react_data_table_component_1 = require("react-data-table-component");
var productCategoriesSlice_1 = require("@/store/reducers/productCategoriesSlice");
var ProductCategoryForm_1 = require("@/components/productCategories/ProductCategoryForm");
function ProductCategories() {
    var fetchedCategories = productCategoriesSlice_1.useFetchProductCategoriesQuery().data;
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
            name: 'Category Image',
            selector: function (row) { return row.image_path; },
            cell: function (row) { return (React.createElement("img", { src: row.image_path, alt: row.name, style: { width: "50px", height: "50px" } })); }
        },
        {
            name: 'Created At',
            selector: function (row) { return new Date(row.created_at).toLocaleDateString(); }
        }
    ];
    react_1.useEffect(function () {
        setCategoriesState(function (state) { return (__assign(__assign({}, state), { categories: fetchedCategories })); });
    }, [fetchedCategories, categoriesState.categories]);
    return (React.createElement("div", { className: 'card' },
        React.createElement("div", { className: 'card-header' },
            React.createElement("h5", null, "Product Categories"),
            React.createElement(ProductCategoryForm_1["default"], { show: categoriesState.show }),
            React.createElement("button", { type: 'button', id: 'modalBtn', "data-bs-toggle": 'modal', "data-bs-target": '#exampleModal', className: 'btn btn-icon btn-primary mt-2', onClick: function () { return setCategoriesState(function (state) { return (__assign(__assign({}, state), { show: !categoriesState.show })); }); } },
                React.createElement("i", { className: 'bi bi-plus-circle' }),
                categoriesState.show ? 'Close' : 'Add Category')),
        React.createElement("div", { className: 'card-body' },
            React.createElement(react_data_table_component_1["default"], { data: categoriesState.categories, columns: columns }))));
}
exports["default"] = ProductCategories;
