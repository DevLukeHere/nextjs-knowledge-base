import useSWR from "swr";
import axios from "axios";

type url = string;

export default function useCategories() {
  const fetcher = (url: url) =>
    axios.get(url).then((response) => response.data);
  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:9000/api/categories`,
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
