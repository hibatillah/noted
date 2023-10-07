import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const swr = (url: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`/api${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
