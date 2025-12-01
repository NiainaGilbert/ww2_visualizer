import pool from "@/lib/db";
const TABLES = ["aircraft", "books", "events", "facilities", "ships", "vehicles", "weapons"];

export async function GET(req, { params }: { params: { table: string } }) 
{
  const table = params.table;

  if (!TABLES.includes(table)) {
    return Response.json({ error: "Table inconnue" }, { status: 400 });
  }
  const row = pool.query(`SELECT * FROM \`${table}\``);
  return Response.json(row, {status : 200}) 
}