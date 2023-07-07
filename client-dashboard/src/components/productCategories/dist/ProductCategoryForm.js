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
var productCategoriesSlice_1 = require("@/store/reducers/productCategoriesSlice");
function ProductCategoryForm(_a) {
    var show = _a.show;
    var _b = productCategoriesSlice_1.useStoreProductCategoryMutation(), storeCategory = _b[0], _c = _b[1], isLoading = _c.isLoading, isSuccess = _c.isSuccess;
    var _d = react_1.useState({
        name: '',
        file: undefined
    }), categoryForm = _d[0], setCategoryForm = _d[1];
    react_1.useEffect(function () {
        if (isSuccess) {
            setCategoryForm(function (state) { return (__assign(__assign({}, state), { name: '', file: undefined })); });
        }
    }, [isSuccess]);
    var onHandleChange = function (e) {
        setCategoryForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onHandleFileChange = function (e) {
        if (e.target.files && e.target.files.length) {
            setCategoryForm(function (state) { var _a; return (__assign(__assign({}, state), { file: (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0] })); });
        }
    };
    var onStoreCategory = function (e) {
        if (!categoryForm.name)
            return;
        var form = new FormData();
        form.append("name", categoryForm.name);
        form.append("img", categoryForm.file);
        storeCategory(form);
    };
    return (React.createElement("form", { style: {
            display: show ? 'block' : 'none'
        } },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Category Name"),
                    React.createElement("input", { type: "text", name: "name", value: categoryForm.name, onChange: onHandleChange, className: "form-control", required: true })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Category Image"),
                    React.createElement("input", { type: "file", id: "catImg", onChange: onHandleFileChange, className: "form-control", required: true })))),
        React.createElement("div", { className: "form-group mt-4" },
            React.createElement("button", { id: "submitBtn", onClick: onStoreCategory, type: "submit", className: "btn btn-primary", disabled: isLoading }, isLoading ? 'Saving...' : 'Save'))));
}
exports["default"] = ProductCategoryForm;
