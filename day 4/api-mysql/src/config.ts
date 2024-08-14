import { config } from "dotenv";
config(); // load env
export const PORT = process.env.PORT || 8000;
export const API_KEY = process.env.API_KEY || "bun123";

export const MYSQL_CONFIG = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "mydb",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
};
