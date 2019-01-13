"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jwt_demo_routes_1 = __importDefault(require("../bootstrap/jwt_demo_routes"));
var JWTDemoApp = /** @class */ (function () {
    function JWTDemoApp() {
        this.app = express_1.default();
        this.setupAppRoutes(this.app);
    }
    JWTDemoApp.prototype.setupAppRoutes = function (appInstance) {
        jwt_demo_routes_1.default(appInstance);
    };
    return JWTDemoApp;
}());
var jwtDemoApp = new JWTDemoApp();
exports.default = jwtDemoApp.app;
//# sourceMappingURL=jwt_demo.js.map