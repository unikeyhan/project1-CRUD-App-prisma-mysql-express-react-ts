"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded());
// parse application/json
app.use(body_parser_1.default.json());
// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
    next();
});
// routes
app.use('/api', index_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
