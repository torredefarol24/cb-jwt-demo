"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("../bootstrap/routes"));
var database_1 = __importDefault(require("../bootstrap/database"));
var body_parser_1 = __importDefault(require("../bootstrap/body-parser"));
var JWTDemoApp = /** @class */ (function () {
    function JWTDemoApp() {
        this.app = express_1.default();
        this.setupBodyParser(this.app);
        this.setupAppRoutes(this.app);
        this.setupAppDatabase();
    }
    JWTDemoApp.prototype.setupAppRoutes = function (app) {
        routes_1.default(app);
    };
    JWTDemoApp.prototype.setupAppDatabase = function () {
        database_1.default;
    };
    JWTDemoApp.prototype.setupBodyParser = function (app) {
        body_parser_1.default(app);
    };
    return JWTDemoApp;
}());
var jwtDemoApp = new JWTDemoApp();
exports.default = jwtDemoApp.app;
//# sourceMappingURL=app.js.map