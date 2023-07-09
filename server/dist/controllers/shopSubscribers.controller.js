"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const shopSubscriberServices = __importStar(require("../services/shopSubscribers.services"));
const index = async (req, res) => {
    const subscribers = await shopSubscriberServices.fetchSubscribers();
    if (!subscribers) {
        res.status(500).json({ message: "error fetching shopsubscribers" });
        return;
    }
    res.status(200).json({ subscribers });
};
exports.index = index;
const store = async (req, res) => {
    const response = await shopSubscriberServices.storeSubscriber(req.body);
    if (!response) {
        res.status(500).json({ message: "error fetching shopsubscribers" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("shop_subscribers", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating shopsubscribers" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("shop_subscribers", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting shopsubscribers" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
