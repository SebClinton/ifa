import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from 'cors';
import {Pool} from 'pg';

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

const connectionPool = new Pool({
    host: process.env.PG_HOST,
    port: Number.parseInt(process.env.PG_PORT || "5432"),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server for the win');
});

app.post('/api/login', (req, res) => {
    console.log(req.body);
    // example of how to query the db and send the results in the http response
    connectionPool.query("select NOW()").then((result) => res.send(result.rows))
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
