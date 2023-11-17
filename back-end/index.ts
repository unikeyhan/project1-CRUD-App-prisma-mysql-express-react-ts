import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello from express and ts simple project');
});

app.get('/hi', (req: Request, res: Response) => {
    res.send('hiiiiiiii');
});

app.listen(process.env.PORT, () => {
    console.log(`it is done and it is listen now to ${process.env.PORT} prot`);
});
