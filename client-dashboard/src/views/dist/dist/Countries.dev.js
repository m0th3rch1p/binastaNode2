"use strict";

exports.__esModule = true;

var countriesSlice_1 = require("@/store/reducers/countriesSlice");

function Countries() {
  var countries = countriesSlice_1.useFetchCountriesQuery().data;
  return React.createElement("div", null, "Countries");
}

exports["default"] = Countries;