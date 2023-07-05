import { trpc } from '@/domains/trpc';

export const useTrpcUsers = () => {
  return trpc.user.list.useQuery();
};
