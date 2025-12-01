// app/(tables)/aircraft/page.tsx
  import { notFound } from "next/navigation";

interface Books {
  id?: number;
  name: string;
  role: string;
  manufacturer: string;
  country: string;
}
export default async function BooksPage() {
  const response = await fetch("http://localhost:3000/api/tables/books");

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