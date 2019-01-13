"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JWT = __importStar(require("jsonwebtoken"));
var jwt_secret_1 = require("../keys/jwt_secret");
var redis_1 = __importDefault(require("../bootstrap/redis"));
var checkValidJWT = function (request, response, next) {
    var context = {
        success: false,
        message: "Auth Failed / No Authorization in Headers"
    };
    if (!request.headers.authorization) {
        return response.status(404).json(context);
    }
    else {
        var token = request.headers.authorization.split(" ")[1];
        if (!token) {
            context.message = "Token Missing";
            return response.status(404).json(context);
        }
        var decodedToken = JWT.verify(token, jwt_secret_1.jwtTokenSecret);
        if (!decodedToken) {
            context.message = "Token Invalid";
            return response.status(401).json(context);
        }
        var redisCallBack = function (error, data) {
            if (error) {
                console.error("REDIS ERROR ", error);
            }
            if (data) {
                var currentToken = data;
                if (token === currentToken)
                    next();
                else {
                    context.message = "Auth Failed / Expired Token";
                    return response.status(401).json(context);
                }
            }
            else {
                context.message = "Auth Failed / No Token for Current User";
                return response.status(404).json(context);
            }
        };
        redis_1.default.get("" + decodedToken.userId, redisCallBack);
    }
};
exports.default = checkValidJWT;
//# sourceMappingURL=check_jwt.js.map