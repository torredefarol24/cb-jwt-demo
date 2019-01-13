"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./main/app"));
var app_port = process.env.PORT || 5000;
var listenCallback = console.log("Listening on port " + app_port);
app_1.default.listen(app_port, function () { return listenCallback; });
//# sourceMappingURL=server.js.map