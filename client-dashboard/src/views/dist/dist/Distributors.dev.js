"use strict";

exports.__esModule = true;

var react_1 = require("react");

var distributorsSlice_1 = require("@/store/reducers/distributorsSlice");

var react_data_table_component_1 = require("react-data-table-component");

var react_router_dom_1 = require("react-router-dom");

function Distributors() {
  var _a = distributorsSlice_1.useFetchDistributorsQuery(),
      distributors = _a.data,
      isFetchDistributorLoading = _a.isLoading,
      isFectchDistributorError = _a.isError;

  var _b = distributorsSlice_1.useVerifyDistributorMutation(),
      verify = _b[0],
      _c = _b[1],
      isVerifyLoading = _c.isLoading,
      isVerifySuccess = _c.isSuccess;

  var onVerifyDistributor = function onVerifyDistributor(e) {
    e.preventDefault();
    verify({
      id: parseInt(e.currentTarget.getAttribute("data-id"))
    });
  };

  react_1.useEffect(function () {
    if (isVerifySuccess) {
      alert("Distributor verified successfully");
    }
  }, [isVerifySuccess]);
  var columns = [{
    name: "First Name",
    selector: function selector(row) {
      return row.first_name;
    }
  }, {
    name: "Last Name",
    selector: function selector(row) {
      return row.last_name;
    }
  }, {
    name: "Email Address",
    selector: function selector(row) {
      return row.email;
    }
  }, {
    name: "Phone Number",
    selector: function selector(row) {
      return row.phone_number;
    }
  }, {
    name: "Store Name",
    selector: function selector(row) {
      return row.store_name;
    }
  }, {
    name: "Status",
    selector: function selector(row) {
      return row.verified ? "Verified" : "Unverified";
    }
  }, {
    name: "Actions",
    selector: function selector(row) {
      return row.id;
    },
    cell: function cell(row) {
      return React.createElement(React.Fragment, null, React.createElement(react_router_dom_1.Link, {
        className: 'btn btn-info btn-sm mr-2',
        to: "/distributor/" + row.id
      }, "View"), !row.verified ? React.createElement("button", {
        "data-id": row.id,
        onClick: onVerifyDistributor,
        className: 'btn btn-primary btn-sm mr-2',
        style: {
          marginRight: "10px"
        }
      }, isVerifyLoading ? "Verifying..." : "Verify", " ") : React.createElement(React.Fragment, null), React.createElement("button", {
        className: 'btn btn-danger btn-sm ml-2'
      }, "Delete"));
    }
  }];
  return React.createElement("div", {
    className: "card"
  }, React.createElement("div", {
    className: "card-header"
  }, React.createElement("h6", null, "Distributors")), React.createElement("div", {
    className: "card-body"
  }, React.createElement(react_data_table_component_1["default"], {
    data: distributors !== null && distributors !== void 0 ? distributors : [],
    columns: columns
  })));
}

exports["default"] = Distributors;