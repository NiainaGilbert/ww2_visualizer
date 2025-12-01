// app/(tables)/aircraft/page.tsx
  import { notFound } from "next/navigation";

interface Facilities {
  id?: number;
  name: string;
  role: string;
  manufacturer: string;
  country: string;
}
export default async function FacilitiesPage() {
  const response = await fetch("http://localhost:3000/api/tables/facilities");

  if (!response.ok) 
    notFound();

  const { data } = await response.json();
  const tableau: Facilities[] = data;

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