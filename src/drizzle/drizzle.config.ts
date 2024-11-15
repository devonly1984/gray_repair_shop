import * as dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit';
dotenv.config({
  path: '.env.local'
})
export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schemas",

  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
