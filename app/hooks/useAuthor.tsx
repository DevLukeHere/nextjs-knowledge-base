import useSWR from "swr";
import axios from "axios";

type authorId = string;
type url = string;

export default function useAuthor(authorId: authorId) {
  const fetcher = (url: url) =>
    axios.get(url).then((response) => response.data);
  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:9000/api/author/${authorId}`,
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
    isValidating,
    isError: error,
  };
}