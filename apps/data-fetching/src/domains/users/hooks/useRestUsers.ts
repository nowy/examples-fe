import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const useRestUsers = () => {
  const { data, isLoading, error } = useQuery<
    AxiosResponse<{ id: string; name: string; editableField: string }[]>,
    { message: string }
  >({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users'),
  });

  return { data: data?.data, isLoading, error };
};
