import { fetchData } from "../services/sanity";
import About from "./_components/About";
import BeAtTheCenter from "./_components/BeAtTheCenter";
import EnjoyPerks from "./_components/EnjoyPerks";
import FloorPlans from "./_components/FloorPlans";
import Gallery from "./_components/Gallery";
import GetDirections from "./_components/GetDirections";
import GetInTouch from "./_components/GetInTouch";
import Hero from "./_components/Hero";

export default async function Index() {
  const data = await fetchData();

  return (
    <div>
      <Hero data={data} />
      <About data={data} />
      <EnjoyPerks data={data} />
      <Gallery data={data} />
      <FloorPlans data={data} />
      <GetDirections data={data} />
      <BeAtTheCenter />
      <GetInTouch data={data} />
    </div>
  );
}
