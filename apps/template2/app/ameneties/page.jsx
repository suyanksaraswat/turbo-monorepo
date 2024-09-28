import { fetchData } from "../../services/sanity";
import AmenitiesContent from "./_components/AmenitiesContent";

const Page = async () => {
  const data = await fetchData();

  return (
    <AmenitiesContent data={data} />
  );
};

export default Page;
