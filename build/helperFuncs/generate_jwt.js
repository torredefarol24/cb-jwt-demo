"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var JWT = __importStar(require("jsonwebtoken"));
var jwt_secret_1 = require("../keys/jwt_secret");
exports.createToken = function (data) {
    var signVals = {
        userId: data
    };
    var expireOpts = {
        expiresIn: 60 * 60 * 24 // 1 day
    };
    var result = JWT.sign(signVals, jwt_secret_1.jwtTokenSecret, expireOpts);
    return result;
};
exports.createRefreshToken = function (data) {
    var signVals = {
        userId: data
    };
    var expireOpts = {
        expiresIn: 60 * 60 * 24 * 60 // 2 months
    };
    var result = JWT.sign(signVals, jwt_secret_1.jwtRefreshSecret, expireOpts);
    return result;
};
//# sourceMappingURL=generate_jwt.js.map