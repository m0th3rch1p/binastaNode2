"use strict";
exports.__esModule = true;
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
function Orders() {
    var orders = ordersSlice_1.useFetchOrdersQuery().data;
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-header" },
            React.createElement("h3", { className: "mb-0" }, "Your Orders")),
        React.createElement("div", { className: "card-body" },
            React.createElement("div", { className: "table-responsive" },
                React.createElement("table", { className: "table" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Order"),
                            React.createElement("th", null, "Date"),
                            React.createElement("th", null, "Status"),
                            React.createElement("th", null, "Total"),
                            React.createElement("th", null, "Actions"))),
                    React.createElement("tbody", null, orders ? orders.map(function (order) { return (React.createElement("tr", null,
                        React.createElement("td", null,
                            "#",
                            order.ref),
                        React.createElement("td", null, new Date(order.created_at).toLocaleDateString()),
                        React.createElement("td", null, order.status),
                        React.createElement("td", null,
                            "ksh.",
                            order.amount),
                        React.createElement("td", null,
                            React.createElement("a", { href: "#0", className: "btn-small d-block" }, "View")))); }) : (React.createElement(React.Fragment, null))))))));
}
exports["default"] = Orders;
