"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = __importDefault(require("../controllers/users"));
var router = express_1.Router();
router.get("/", users_1.default.getAll);
exports.default = router;
//# sourceMappingURL=user_routes.js.map