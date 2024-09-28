import { fetchData } from '../../services/sanity';
import FloorPlans from './_components/FloorPlans';


const DirectionsPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <FloorPlans
        data={data}
      />
    </div>
  );
};

export default DirectionsPage;
