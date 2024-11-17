"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
const users = [];
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email };
    users.push(newUser);
    res.status(201).json({ message: 'User successfully added' });
});
app.get('/users', (req, res) => {
    res.status(201).json(users);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
