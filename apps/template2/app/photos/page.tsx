import { fetchData } from "../../services/sanity";
import PhotoContent from "./_components/PhotoContent";

const page = async () => {
  const data = await fetchData();
  return (
    <div>
      <PhotoContent data={data} />
    </div>
  );
};

export default page;
