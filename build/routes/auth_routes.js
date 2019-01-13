"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth/auth_controller"));
var router = express_1.Router();
router.get("/login", auth_controller_1.default.login);
exports.default = router;
//# sourceMappingURL=auth_routes.js.map