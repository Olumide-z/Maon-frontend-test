import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchNews = async () => {
  const { data } = await axios.get('/api/news'); 
  return data;
};

export const useGetNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
};
