import { fetchData } from '../../services/sanity';
import Directions from './_components/Directions';

const DirectionsPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <Directions
        data={data}
      />
    </div>
  );
};

export default DirectionsPage;
