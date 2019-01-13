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
var connectCallback = function () { return console.log("Mongo DB Connection Successful"); };
var errorCallback = function (error) { return console.error("Mongo Conn Error " + error); };
var connectToDB = mongoose_1.default.connect(mongo_connection_str_1.default, connOptions)
    .then(function () { return connectCallback; })
    .catch(function (err) { return errorCallback(err); });
exports.default = connectToDB;
//# sourceMappingURL=database.js.map