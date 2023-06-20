import useSWR from "swr";
import axios from "axios";

export default function useCategories() {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data.categories);

  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:3000/api/articles`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    categories: data,
    isLoading,
    isValidating,
    isError: error,
  };
}
