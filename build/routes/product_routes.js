"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = __importDefault(require("../controllers/products/"));
var check_jwt_1 = __importDefault(require("../middleware/check_jwt"));
var router = express_1.Router();
router.get("/", check_jwt_1.default, products_1.default.getAll);
exports.default = router;
//# sourceMappingURL=product_routes.js.map