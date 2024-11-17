import express, { Request, Response } from 'express';
import path from 'path';

type TUser = {
    name: string;
    email: string;
};

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const users: TUser[] = [];

app.post('/users', (req: Request, res: Response) => {
    const { name, email } = req.body;

    const newUser: TUser = { name, email };
    users.push(newUser);

    res.status(201).json({ message: 'User successfully added' });
});

app.get('/users', (req: Request, res: Response) => {
    res.status(201).json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
