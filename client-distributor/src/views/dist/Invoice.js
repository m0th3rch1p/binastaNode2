"use strict";
exports.__esModule = true;
var flogo_png_1 = require("@/assets/images/flogo.png");
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
var react_router_dom_1 = require("react-router-dom");
function Invoice() {
    var _a;
    var params = react_router_dom_1.useParams();
    var _b = ordersSlice_1.useFetchSingleOrderQuery(parseInt(params.id)), order = _b.data, isFectchSingleOrderLoading = _b.isLoading, isFetchSingleOrderError = _b.isError;
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-body" },
            React.createElement("div", { className: "invoice" },
                React.createElement("div", { className: "d-md-flex justify-content-between align-items-center mb-4" },
                    React.createElement("div", null,
                        "Invoice No : #", order === null || order === void 0 ? void 0 :
                        order.ref),
                    React.createElement("div", null, "Date: 3/29/2021")),
                React.createElement("div", { className: "d-md-flex justify-content-between align-items-center" },
                    React.createElement("h4", null, "Invoice"),
                    React.createElement("div", null,
                        React.createElement("img", { width: "120", src: flogo_png_1["default"], alt: "logo" }))),
                React.createElement("hr", { className: "my-4" }),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("p", null,
                            React.createElement("strong", null, "Bill From")),
                        React.createElement("p", null,
                            "81 Fulton Park, ",
                            React.createElement("br", null),
                            "Brazil/Pedro Leopoldo")),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("p", { className: "text-start text-md-end" },
                            React.createElement("strong", null, "Bill to")),
                        React.createElement("p", null,
                            "81 Fulton Park, ",
                            React.createElement("br", null),
                            "Brazil/Pedro Leopoldo"))),
                React.createElement("div", { className: "table-responsive", tabIndex: 1, style: {
                        overflow: "hidden",
                        outline: "none"
                    } },
                    React.createElement("table", { className: "table mb-4 mt-4" },
                        React.createElement("thead", { className: "thead-light" },
                            React.createElement("tr", null,
                                React.createElement("th", null, "#"),
                                React.createElement("th", null, "Description"),
                                React.createElement("th", { className: "text-end" }, "Price"),
                                React.createElement("th", { className: "text-end" }, "Total"))),
                        React.createElement("tbody", null, (_a = order === null || order === void 0 ? void 0 : order.variations) === null || _a === void 0 ? void 0 : _a.map(function (variation) { return (React.createElement("tr", { className: "text-end" },
                            React.createElement("td", { className: "text-start" }, "1"),
                            React.createElement("td", { className: "text-start" }, variation.variation),
                            React.createElement("td", null,
                                "ksh.",
                                variation.buy_price),
                            React.createElement("td", null,
                                "ksh.",
                                variation.buy_price))); })))),
                React.createElement("div", { className: "text-end" },
                    React.createElement("h4", { className: "fw-bold" },
                        "Total: ksh.", order === null || order === void 0 ? void 0 :
                        order.amount))))));
}
exports["default"] = Invoice;
