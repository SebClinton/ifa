import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app: Express = express();
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options))
app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server for the win');
});

app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.send('call to login');
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
