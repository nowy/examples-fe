import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export function GraphqlExampleProviderLayout() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}
