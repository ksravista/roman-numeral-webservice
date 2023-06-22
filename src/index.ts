import express, { Express } from 'express';

import { PORT } from './config/config';
import { logRoute } from './routes/logging/loggingRoutes';
import { metricsRoute } from './routes/metrics/metricsRoutes';
import { romanNumberRouter } from './routes/romanNumeralRoutes';

const app: Express = express();

app.use('/romannumeral', romanNumberRouter);
app.use('/logs', logRoute);
app.use('/metrics', metricsRoute);

export default app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});
