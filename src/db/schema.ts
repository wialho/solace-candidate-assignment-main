import { SQL, sql } from "drizzle-orm";
import {
  pgTable,
  integer,
  text,
  jsonb,
  serial,
  timestamp,
  bigint,
  customType,
  index,
} from "drizzle-orm/pg-core";

export const tsvector = customType<{
  data: string;
}>({
  dataType() {
    return `tsvector`;
  },
});

const advocates = pgTable(
  "advocates",
  {
    id: serial("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    city: text("city").notNull(),
    degree: text("degree").notNull(),
    specialties: jsonb("payload").default([]).notNull(),
    yearsOfExperience: integer("years_of_experience").notNull(),
    phoneNumber: bigint("phone_number", { mode: "number" }).notNull(),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
    // https://orm.drizzle.team/docs/guides/full-text-search-with-generated-columns
    searchTerm: tsvector("search_term")
      .notNull()
      .generatedAlwaysAs(
        (): SQL => sql`to_tsvector('english', 
      ${advocates.firstName}
      ${advocates.lastName}
      ${advocates.city}
      ${advocates.degree}
      ${advocates.specialties})`
      ),
  },
  (t) => [index("idx_search_term").using("gin", t.searchTerm)]
);

export { advocates };
