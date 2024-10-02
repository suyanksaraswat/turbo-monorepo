import { ReactNode } from "react";
import Nav from "../../components/Nav";
import { fetchData } from "../../services/sanity";

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const data = await fetchData();

  return (
    <div className="bg-[#f4f4ef]">
      <Nav data={data} />
      <div className="mt-20 md:mt-24">{children}</div>
    </div>
  );
}
