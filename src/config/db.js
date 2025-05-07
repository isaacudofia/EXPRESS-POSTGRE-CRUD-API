import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config({ path: "./src/.env" });

// console.log(process.env.DB_PASSWORD);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

// console.log(process.env.DB_PORT);

const defaultPool = pool.on("connect", () => {
  console.log("Connection pool established with Database");
});

export default defaultPool;
