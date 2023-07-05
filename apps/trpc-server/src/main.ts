import express from 'express';
import * as path from 'path';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@examples-fe/trpc-server';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', trpcExpress.createExpressMiddleware({ router: appRouter }));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
