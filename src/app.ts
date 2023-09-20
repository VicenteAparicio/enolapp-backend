import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './Routes/router';
import "reflect-metadata";
import database from './Config/data-source'

database.initialize()
// .then(() => console.log("Database connected"))
// .catch((error) => console.error(error))

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.listen(PORT);