"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var redisClient = redis_1.default.createClient();
var connectCallback = function () { return console.log('Redis client connected ' + new Date()); };
redisClient.on('connect', connectCallback);
exports.default = redisClient;
//# sourceMappingURL=redis.js.map