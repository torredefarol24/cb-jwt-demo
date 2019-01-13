"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
var getAllUsers = function (request, response) {
    var context = {
        success: true,
        message: "",
        data: null
    };
    User_1.default.find()
        .then(function (users) {
        if (users.length > 0) {
            context.message = "Users Found";
            context.data = users;
        }
        else {
            context.data = [];
            context.message = "There are no users in the database";
        }
        return response.status(200).json(context);
    })
        .catch(function (err) {
        context.success = false;
        context.message = err;
        return response.status(500).json(context);
    });
};
exports.default = getAllUsers;
//# sourceMappingURL=get_all.js.map