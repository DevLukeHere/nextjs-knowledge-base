import useSWR from "swr";
import axios from "axios";

export default function useCategory(id?: string) {
  const fetcher = (url: string) =>
    axios
      .get(url)
      .then((response) =>
        response.data.categories.find((category: any) => category.id === id)
      );
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/category/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    category: data,
    isLoading,
    isError: error,
  };
}
