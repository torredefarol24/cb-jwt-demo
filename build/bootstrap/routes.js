"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../routes"));
var routeSetup = function (app) {
    app.use("/auth", routes_1.default.auth);
    app.use("/users", routes_1.default.users);
    app.use("/products", routes_1.default.products);
};
exports.default = routeSetup;
//# sourceMappingURL=routes.js.map