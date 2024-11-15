import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */

const queryClient = process.env.VERCEL
    ? sql
    : postgres(process.env.POSTGRES_URL!, { max: 1 });

export const db = drizzle(queryClient as any, { schema }); 