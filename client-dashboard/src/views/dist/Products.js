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
var productsSlice_1 = require("@/store/reducers/productsSlice");
var react_data_table_component_1 = require("react-data-table-component");
var react_1 = require("react");
var ProductForm_1 = require("@/components/products/ProductForm");
function Products() {
    var fetchedProducts = productsSlice_1.useFetchProductsQuery().data;
    var _a = react_1.useState({
        show: false,
        products: []
    }), productsState = _a[0], setProductsState = _a[1];
    react_1.useEffect(function () {
        setProductsState(function (state) { return (__assign(__assign({}, state), { products: fetchedProducts })); });
    }, [fetchedProducts]);
    var columns = [
        {
            name: 'Name',
            selector: function (row) { return row.name; }
        },
        {
            name: 'Category',
            selector: function (row) { return row.category_name; }
        },
        {
            name: 'Product Image',
            selector: function (row) { var _a; return (_a = row.images) === null || _a === void 0 ? void 0 : _a[0].path; },
            cell: function (row) { var _a; return React.createElement("img", { src: (_a = row.images) === null || _a === void 0 ? void 0 : _a[0].path, alt: row.product_name }); }
        },
        {
            name: 'Total Views',
            selector: function (row) { return row.views; }
        }
    ];
    return (React.createElement("div", { className: 'card' },
        React.createElement("div", { className: 'card-header' },
            React.createElement("h5", null, "Products"),
            React.createElement(ProductForm_1["default"], { show: productsState.show }),
            React.createElement("button", { type: 'button', id: 'modalBtn', "data-bs-toggle": 'modal', "data-bs-target": '#exampleModal', className: 'btn btn-icon btn-primary', onClick: function () { return setProductsState(function (state) { return (__assign(__assign({}, state), { show: !productsState.show })); }); } },
                React.createElement("i", { className: 'bi bi-plus-circle' }),
                " ",
                productsState.show ? 'Close' : 'Add Product')),
        React.createElement("div", { className: 'card-body' },
            React.createElement(react_data_table_component_1["default"], { data: productsState.products, columns: columns, responsive: true }))));
}
exports["default"] = Products;
