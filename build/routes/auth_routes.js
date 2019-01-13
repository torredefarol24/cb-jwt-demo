"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../controllers/auth"));
var router = express_1.Router();
router.post("/login", auth_1.default.login);
exports.default = router;
//# sourceMappingURL=auth_routes.js.map