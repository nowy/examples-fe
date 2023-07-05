import { trpc } from '@/domains/trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { Outlet } from 'react-router-dom';

export const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: '/api/trpc' })],
});
export const queryClient = new QueryClient();

export function TrpcExampleProviderLayout() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
