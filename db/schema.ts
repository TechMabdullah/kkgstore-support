import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid("id") // or text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`), // Fixed typo here
  organization_id: text("organization_id").notNull(),
  name: text("name"),
  email: text("email").notNull().unique(), // Fixed typo here
  image: text("image"),
  created_at: timestamp("created_at").defaultNow(), // Cleaner than text + sql`now()`
});
