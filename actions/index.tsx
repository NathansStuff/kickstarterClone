import useSWR from 'swr';

const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json());

export const useGetNews = (initialData: any) => {
 return useSWR(`/api/news`, fetcher, { initialData });
};
