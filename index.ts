import express from "express";
import zerodepthEndpoint from "./src/zerodepth/zerodepthEndpoint";

const app = express();
app.use(express.json());
const port = 8080;

app.post("/zerodepth", zerodepthEndpoint)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
