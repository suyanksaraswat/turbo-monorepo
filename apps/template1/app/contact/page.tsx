import { fetchData } from "../../services/sanity";
import Contact from "./_components/Contact";

const DirectionsPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <Contact data={data} />
    </div>
  );
};

export default DirectionsPage;
