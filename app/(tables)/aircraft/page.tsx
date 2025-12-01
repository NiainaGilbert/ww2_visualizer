// app/(tables)/aircraft/page.tsx
  import { notFound } from "next/navigation";

interface Aircraft {
  id?: number;
  name: string;
  role: string;
  manufacturer: string;
  country: string;
}
export default async function AircraftPage({params } : { params : Promise<{table : string}>}) {
  const response = await fetch("http://localhost:3000/api/tables/aircraft");

  if (!response.ok) 
    notFound();

  const { data } = await response.json();
  const tableau: Aircraft[] = data;

  return (
    <div>
      {tableau.map((tab) => (
        <div key={tab.id ?? tab.name}>
          <p>{tab.name}</p>
        </div>
      ))}
    </div>
  );
}