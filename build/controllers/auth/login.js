"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginUser = function (request, response) {
    var context = {
        success: true,
        message: "Login Successfull",
        data: []
    };
    return response.status(200).json(context);
};
exports.default = loginUser;
//# sourceMappingURL=login.js.map