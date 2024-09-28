import { fetchData } from "../services/sanity";

export default async function Home() {
  const data = await fetchData();

  console.log("#### data-", data);

  return <div className="bg-[black]">qwe</div>;
}
