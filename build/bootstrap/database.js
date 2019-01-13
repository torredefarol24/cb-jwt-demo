"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongo_connection_str_1 = __importDefault(require("../keys/mongo_connection_str"));
var connOptions = {
    useNewUrlParser: true
};
var connectToDB = mongoose_1.default.connect(mongo_connection_str_1.default, connOptions)
    .then(function () { return console.log("Mongo DB Connection Successful"); })
    .catch(function (err) { return console.error("Mongo Conn Error " + err); });
exports.default = connectToDB;
//# sourceMappingURL=database.js.map