import { asc, sql } from "drizzle-orm";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = 10;
  const page = parseInt(searchParams.get("page") ?? "0");
  const searchTerm = searchParams.get("searchterm");

  // https://orm.drizzle.team/docs/select advanced filter section for reference on undefined
  const data = await db
    .select()
    .from(advocates)
    .where(
      searchTerm
        ? sql`${
            advocates.searchTerm
          } @@ to_tsquery('english', ${searchParams.get("searchterm")})`
        : undefined
    )
    .orderBy(asc(advocates.createdAt))
    .limit(10)
    .offset(page * limit);

  // const data = advocateData;

  return Response.json({ data });
}
