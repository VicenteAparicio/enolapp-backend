import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes/router';

const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.error(`App runing on port : ${PORT}`));