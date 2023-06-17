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
exports.idPolicy = exports.slugPolicy = exports.updatePolicy = exports.storePolicy = void 0;
const productCategoryValidations = __importStar(require("../validations/productCategory.validations"));
const storePolicy = (req, res, next) => {
    const { error, value } = productCategoryValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    }
    else
        next();
};
exports.storePolicy = storePolicy;
const updatePolicy = (req, res, next) => {
    const { error, value } = productCategoryValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    }
    else
        next();
};
exports.updatePolicy = updatePolicy;
const slugPolicy = (req, res, next) => {
    const { error, value } = productCategoryValidations.fetchBySlug.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    }
    else
        next();
};
exports.slugPolicy = slugPolicy;
const idPolicy = (req, res, next) => {
    const { error, value } = productCategoryValidations.fetchByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    }
    else
        next();
};
exports.idPolicy = idPolicy;
