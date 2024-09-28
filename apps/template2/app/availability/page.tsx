import { fetchData } from "../../services/sanity";
import AvailabilityContent from "./_components/AvailabilityContent";

const Availability = async () => {
  const data = await fetchData();

  return (
    <div>
      <AvailabilityContent data={data} />
    </div>
  );
};

export default Availability;
