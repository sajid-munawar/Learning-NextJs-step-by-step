"use client";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: any) => fetch(url).then((rest) => rest.json());

export default function Client_1() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  } else {
    return <>{data.content}</>;
  }
  if (error) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
}
