import express, { Express } from 'express';

import { PORT } from './config/config';
import { logRoute } from './routes/logsRoutes';
import { romanNumberRouter } from './routes/romanNumeralRoutes';

const app: Express = express();

app.use('/romannumeral', romanNumberRouter);
app.use('/logs', logRoute);

export default app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});
