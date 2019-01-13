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
        default: null
    }
};
var collectionOptions = {
    collection: "user"
};
var userSchema = new mongoose_1.default.Schema(userSchemaOptions, collectionOptions);
exports.default = userSchema;
//# sourceMappingURL=User.js.map