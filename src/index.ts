import express, { Express } from 'express';
import { romanNumberRouter } from './routes/romanNumeralRoutes';
import { PORT } from './config/config';

const app: Express = express();

app.use('/romannumeral', romanNumberRouter);

app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});