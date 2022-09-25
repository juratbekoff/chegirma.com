"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
try {
    var PORT_1 = process.env.PORT || 9090;
    app.listen(PORT_1, function () {
        console.log("Server is running on ".concat(PORT_1));
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=server.js.map