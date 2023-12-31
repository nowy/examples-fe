import { useTrpcUsers } from '../hooks/useTrpcUsers';

export const TrpcUsersPage = () => {
  const { data: users, isLoading, error } = useTrpcUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
