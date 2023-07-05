import { userRouter } from './domains/users';
import { router } from './trpc';

export type AppRouter = typeof appRouter;

export const appRouter = router({
  user: userRouter,
});
