import { AppRouter } from '@examples-fe/trpc-server';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
