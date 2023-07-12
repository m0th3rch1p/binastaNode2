"use strict";
exports.__esModule = true;
var react_data_table_component_1 = require("react-data-table-component");
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
function Orders() {
    var columns = [
        {
            name: 'Ref',
            selector: function (row) { return row.ref; }
        },
        {
            name: 'Status',
            selector: function (row) { return row.status; },
            cell: function (row) { return (React.createElement("span", { className: "badge badge-" + (row.status ? "danger" : "success") }, row.status)); }
        },
        {
            name: 'Delivery Address',
            selector: function (row) { return row.address; }
        },
        {
            name: 'Customer',
            selector: function (row) { return row.email; }
        },
        {
            name: 'Amount',
            selector: function (row) { return row.amount; }
        },
        {
            name: 'Ordered At',
            selector: function (row) { return new Date(row.created_at).toLocaleDateString(); }
        },
    ];
    var _a = ordersSlice_1.useFetchUserOrdersQuery(), orders = _a.data, isLoading = _a.isLoading, isSuccess = _a.isSuccess, isError = _a.isError;
    return (React.createElement("div", { className: 'card' },
        React.createElement("div", { className: 'card-body' },
            React.createElement(react_data_table_component_1["default"], { data: orders, columns: columns, responsive: true }))));
}
exports["default"] = Orders;
