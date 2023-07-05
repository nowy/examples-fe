import { useRestUsers } from '../hooks/useRestUsers';

export const RestUsersPage = () => {
  const { data: users, isLoading, error } = useRestUsers();

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
