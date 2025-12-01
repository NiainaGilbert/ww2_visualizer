// app/(tables)/aircraft/page.tsx
  import { notFound } from "next/navigation";

interface Ships {
  id?: number;
  name: string;
  role: string;
  manufacturer: string;
  country: string;
}
export default async function ShipsPage() {
  const response = await fetch("http://localhost:3000/api/tables/ships");

  if (!response.ok) 
    notFound();

  const { data } = await response.json();
  const tableau: Ships[] = data;

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