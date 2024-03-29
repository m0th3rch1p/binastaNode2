"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Logo_1 = require("@/components/common/Logo");
var mpesa_jpg_1 = require("@/assets/images/mpesa.jpg");
var ordersSlice_1 = require("@/store/reducers/ordersSlice");
var Loader_1 = require("@/components/common/Loader");
function Invoice() {
    var _a, _b;
    var params = react_router_dom_1.useParams();
    var _c = ordersSlice_1.useFetchSingleOrderQuery(parseInt(params.orderId)), data = _c.data, isLoading = _c.isLoading, isSuccess = _c.isSuccess;
    return (!isLoading && (data === null || data === void 0 ? void 0 : data.order) ? React.createElement(React.Fragment, null,
        React.createElement("div", { className: "invoice-header" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("div", { className: "invoice-name" },
                        React.createElement("div", { className: "logo" },
                            React.createElement(react_router_dom_1.Link, { to: "/" },
                                React.createElement(Logo_1["default"], { width: 200 }))))),
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("div", { className: "invoice-numb" },
                        React.createElement("h6", { className: "text-end mb-10 mt-20" },
                            "Date: ",
                            new Date((_a = data === null || data === void 0 ? void 0 : data.order) === null || _a === void 0 ? void 0 : _a.created_at).toLocaleDateString()),
                        React.createElement("h6", { className: "text-end invoice-header-1" },
                            "Invoice No: #", (_b = data === null || data === void 0 ? void 0 : data.order) === null || _b === void 0 ? void 0 :
                            _b.ref))))),
        React.createElement("div", { className: "invoice-top" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-9 col-md-6" },
                    React.createElement("div", { className: "invoice-number" },
                        React.createElement("h4", { className: "invoice-title-1 mb-10" }, "Invoice From"),
                        React.createElement("p", { className: "invoice-addr-1" },
                            React.createElement("strong", null, "Binasta Ltd"),
                            " ",
                            React.createElement("br", null),
                            "info@binsasta.co.ke ",
                            React.createElement("br", null),
                            "5171 Utawala Nairobi ",
                            React.createElement("br", null),
                            "Kenya"))),
                React.createElement("div", { className: "col-lg-3 col-md-6" },
                    React.createElement("div", { className: "invoice-number" },
                        React.createElement("h4", { className: "invoice-title-1 mb-10" }, "Bill To"),
                        React.createElement("p", { className: "invoice-addr-1" },
                            React.createElement("strong", null, "NestMart Inc"),
                            " ",
                            React.createElement("br", null),
                            "billing@NestMart.com ",
                            React.createElement("br", null),
                            "205 North Michigan Avenue, ",
                            React.createElement("br", null),
                            "Suite 810 Chicago, 60601, USA")))),
            React.createElement("div", { className: "row mt-2" },
                React.createElement("div", { className: "col-lg-3 col-md-6" },
                    React.createElement("h4", { className: "invoice-title-1 mb-10" }, "Payment Method"),
                    React.createElement("p", null,
                        React.createElement("img", { src: mpesa_jpg_1["default"], alt: "" }))))),
        React.createElement("div", { className: "invoice-center" },
            React.createElement("div", { className: "table-responsive" },
                React.createElement("table", { className: "table table-striped invoice-table" },
                    React.createElement("thead", { className: "bg-active" },
                        React.createElement("tr", null,
                            React.createElement("th", null, "Product Name"),
                            React.createElement("th", { className: "text-center" }, "Unit Price"),
                            React.createElement("th", { className: "text-center" }, "Quantity"),
                            React.createElement("th", { className: "text-right" }, "Amount"))),
                    React.createElement("tbody", null, data.product_variations.map(function (pv) { return (React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: "item-desc-1" },
                                React.createElement("span", null, pv.product_name))),
                        React.createElement("td", { className: "text-center" },
                            "ksh.",
                            pv.buy_price),
                        React.createElement("td", { className: "text-center" }, pv.quantity[0].quantity),
                        React.createElement("td", { className: "text-right" },
                            "ksh.",
                            pv.buy_price * parseFloat(pv.quantity[0].quantity)))); }))))),
        React.createElement("div", { className: "invoice-bottom" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("div", null,
                        React.createElement("h3", { className: "invoice-title-1" }, "Important Note"),
                        React.createElement("ul", { className: "important-notes-list-1" },
                            React.createElement("li", null, "All amounts shown on this invoice are in US dollars"),
                            React.createElement("li", null, "finance charge of 1.5% will be made on unpaid balances after 30 days."),
                            React.createElement("li", null, "Once order done, money can't refund"),
                            React.createElement("li", null, "Delivery might delay due to some external dependency"))))))) : React.createElement(Loader_1["default"], null));
}
exports["default"] = Invoice;
