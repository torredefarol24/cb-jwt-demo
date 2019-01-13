"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dummyProducts = [
    {
        id: 1,
        name: "Prod1"
    },
    {
        id: 2,
        name: "Prod2"
    }
];
var getAllProducts = function (request, resposne) {
    var context = {
        success: true,
        message: 'Fetched Dummy Products',
        data: dummyProducts
    };
    return resposne.status(200).json(context);
};
exports.default = getAllProducts;
//# sourceMappingURL=get_all.js.map