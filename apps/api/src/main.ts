import express, { json } from 'express';
import * as path from 'path';
import * as trpcExpress from '@trpc/server/adapters/express';
import { expressMiddleware } from '@apollo/server/express4';
import { appRouter } from '@examples-fe/trpc-server';
import { apolloServer } from './graphql/server';
import cors from 'cors';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

/**
 * Rest API
 */
app.use('/api/users', (_, res) => {
  res.json([
    {
      id: '123',
      name: 'Frank Reynolds',
      editableField: 'Some editable field',
    },
  ]);
});

/**
 * tRPC API
 */
app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({ router: appRouter })
);

/**
 * GraphQL API
 */
await apolloServer.start();

app.use(
  '/api/graphql',
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(apolloServer)
);

const port = process.env.PORT || 3010;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

server.on('error', console.error);
