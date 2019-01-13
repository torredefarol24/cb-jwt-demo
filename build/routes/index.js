"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_routes_1 = __importDefault(require("./auth_routes"));
var user_routes_1 = __importDefault(require("./user_routes"));
var product_routes_1 = __importDefault(require("./product_routes"));
var routes = {
    auth: auth_routes_1.default,
    users: user_routes_1.default,
    products: product_routes_1.default
};
exports.default = routes;
//# sourceMappingURL=index.js.map