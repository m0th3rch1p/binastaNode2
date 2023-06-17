"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
const index = async (req, res) => {
    const { response: domains, error } = await (0, queryHelpers_1.execQuery)("domains", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching domains" });
    }
    else if (domains) {
        res.status(200).json({ domains });
    }
};
exports.index = index;
const store = async (req, res) => {
    const domain = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)("domains", "INSERT", ["distributor_id", "name"], [domain.distributorId, domain.name]);
    if (error) {
        res.status(500).json({ message: "error fetching domains" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const domain = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)("domains", "UPDATEBYID", ["distributor_id", "name"], [domain.distributorId, domain.name]);
    if (error) {
        res.status(500).json({ message: "error updating domains" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("domains", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting domains" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
