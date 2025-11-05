import { asc, sql } from "drizzle-orm";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function GET(search, limit, offset) {
  // Uncomment this line to use a database
  const data = await db
    .select()
    .from(advocates)
    .where(sql`${advocates.searchTerm} @@ to_tsquery('english', ${search})`)
    .orderby(asc(advocates.createdAt))
    .limit(limit)
    .offset(offset);

  // const data = advocateData;

  return Response.json({ data });
}
