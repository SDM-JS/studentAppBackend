// import { PrismaNeon } from "@prisma/adapter-neon";
// import { PrismaClient } from "../prisma/generated/prisma/client.ts";

// const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
// export const prisma = new PrismaClient({ adapter });

import { PrismaClient } from "../prisma/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg"; // 1. Import the pg library

// 2. Create the connection pool manually
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// 3. Pass the pool instance to the adapter
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
  log: ["query"],
});
