"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hello from express and ts simple project');
});
app.get('/hi', (req, res) => {
    res.send('hiiiiiiii');
});
app.listen(process.env.PORT, () => {
    console.log(`it is done and it is listen now to ${process.env.PORT} prot`);
});
