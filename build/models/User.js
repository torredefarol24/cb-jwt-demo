"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var User_1 = __importDefault(require("../schemas/User"));
var User = mongoose_1.default.model('User', User_1.default);
exports.default = User;
//# sourceMappingURL=User.js.map