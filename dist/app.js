"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!"
    });
});
app.get("/echo/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id: id
    });
});
app.post("/sum", (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers)) {
        res.status(400).json({
            msg: "Invalid input"
        });
        return;
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    res.json({ sum });
});
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
