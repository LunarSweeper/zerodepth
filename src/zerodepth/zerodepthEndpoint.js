"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
exports.default = (req, res) => {
    res.set("Cache-Control", "no-cache, must-revalidate");
    res.set("Content-Type", "application/json");
    if (Array.isArray(req.body)) {
        res.send(helpers_1.findZeros(req.body));
    }
    else {
        res.send([null, null]);
    }
};
