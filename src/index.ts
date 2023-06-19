import express, { Express } from 'express';

import { PORT } from './config/config';
import { romanNumberRouter } from './routes/romanNumeralRoutes';

const app: Express = express();

app.use('/romannumeral', romanNumberRouter);

app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});
