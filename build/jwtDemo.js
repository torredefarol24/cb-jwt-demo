"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var JWTDemoApp = /** @class */ (function () {
    function JWTDemoApp() {
        this.app = express_1.default();
    }
    return JWTDemoApp;
}());
var jwtDemoApp = new JWTDemoApp();
exports.default = jwtDemoApp.app;
//# sourceMappingURL=jwtDemo.js.map