"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_routes_1 = __importDefault(require("../routes/auth_routes"));
var user_routes_1 = __importDefault(require("../routes/user_routes"));
var routeSetup = function (app) {
    app.use("/auth", auth_routes_1.default);
    app.use("/users", user_routes_1.default);
};
exports.default = routeSetup;
//# sourceMappingURL=routes.js.map