import useSWR from "swr";
import axios from "axios";

export default function useCategory(categoryId: string) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:3000/api/category/${categoryId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    articles: data,
    isLoading,
    isValidating,
    isError: error,
  };
}
