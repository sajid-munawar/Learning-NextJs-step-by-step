async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
}

export default async function Home() {
  const data = await getData();
  return <>{data.content}</>;
}
