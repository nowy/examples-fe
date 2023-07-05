import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      editableField
    }
  }
`;

export const useGraphqlUsers = () => {
  /**
   * For demonstration puposes, we're manually typing this
   * In a real life Apollo client app, these types are generated.
   *
   * Read the article below:
   * https://www.apollographql.com/docs/react/development-testing/static-typing/
   */
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<{
    users: { name: string; id: string; editableField: string }[];
  }>(GET_USERS);

  return { data: data?.users, isLoading, error };
};
