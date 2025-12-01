// app/(tables)/aircraft/page.tsx
  import { notFound } from "next/navigation";

interface Events {
  id?: number;
  name: string;
  role: string;
  manufacturer: string;
  country: string;
}
export default async function EventsPage() {
  const response = await fetch("http://localhost:3000/api/tables/events");

  if (!response.ok) 
    notFound();

  const { data } = await response.json();
  const tableau: Events[] = data;

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