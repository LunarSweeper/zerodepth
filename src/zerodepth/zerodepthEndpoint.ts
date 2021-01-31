import type {Request, Response} from "express";

import {findZeros} from "./helpers";

export default (req: Request, res: Response) => {
    res.set("Cache-Control", "no-cache, must-revalidate");
    res.set("Content-Type", "application/json");

    if (Array.isArray(req.body)) {
        res.send(findZeros(req.body));
    } else {
        res.send([null, null]);
    }
}