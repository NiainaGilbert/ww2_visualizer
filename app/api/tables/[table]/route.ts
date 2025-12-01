import  pool  from "@/lib/db";
import { NextRequest } from "next/server";

// Liste des tables autorisées (whitelist pour éviter les attaques d'injection)
const TABLES = [
  "aircraft",
  "books",
  "events",
  "facilities",
  "ships",
  "vehicles",
  "weapons",
] as const;

export async function GET(request: NextRequest,     { params }: { params: Promise<{ table: string }> }) 
{
  const { table } = await params;
  if (!table || !TABLES.includes(table as any)) 
  {
    return Response.json(
      { error: "Table inconnue ou non autorisée" },
      { status: 400 }
    );
  }

  try 
  {
    const [row, field] = await pool.query(`SELECT * FROM \`${table}\`;`);
    return Response.json({
      data: row
    });
  } 
  catch (error) 
  {
    console.error(`Erreur lors de la lecture de la table ${table}:`, error);
    return Response.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}