"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zerodepthEndpoint_1 = __importDefault(require("./src/zerodepth/zerodepthEndpoint"));
const app = express_1.default();
app.use(express_1.default.json());
const port = 8080;
app.post("/zerodepth", zerodepthEndpoint_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
