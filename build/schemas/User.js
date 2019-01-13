"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchemaOptions = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    currentJWT: {
        type: String,
        required: true
    }
};
var userSchema = new mongoose_1.default.Schema(userSchemaOptions);
exports.default = userSchema;
//# sourceMappingURL=User.js.map