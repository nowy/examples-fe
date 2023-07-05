import { trpc } from '@/domains/trpc';

export const useUsers = () => {
  return trpc.user.list.useQuery();
};
