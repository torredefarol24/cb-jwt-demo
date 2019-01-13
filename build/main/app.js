"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("../bootstrap/routes"));
var database_setup_1 = __importDefault(require("../bootstrap/database_setup"));
var JWTDemoApp = /** @class */ (function () {
    function JWTDemoApp() {
        this.app = express_1.default();
        this.setupAppRoutes(this.app);
        this.setupAppDatabase();
    }
    JWTDemoApp.prototype.setupAppRoutes = function (appInstance) {
        routes_1.default(appInstance);
    };
    JWTDemoApp.prototype.setupAppDatabase = function () {
        database_setup_1.default;
    };
    return JWTDemoApp;
}());
var jwtDemoApp = new JWTDemoApp();
exports.default = jwtDemoApp.app;
//# sourceMappingURL=app.js.map