import useSWR from "swr";
import axios from "axios";

export default function useAuthor(authorId: string) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/author/${authorId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    author: data,
    isLoading,
    isError: error,
  };
}
