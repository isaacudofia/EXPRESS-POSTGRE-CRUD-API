import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

//DEFINING INSTANCES FOR THE APPLICATION
const app = express();
const PORT = 4000;

//GLOBAL MIDDLEWARES
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", userRoutes);

//Testing POSTEGRES Connection
app.get("/", async (req, res) => {
  console.log("start");
  const result = await pool.query("SELECT current_database()");
  console.log("end");
  res
    .status(200)
    .send(`The database name is : ${result.rows[0].current_database}`);
});

//OTHER MIDDLEWARES

//ERROR HANDLING MIDDLEWARES
app.use(errorHandling);

//CREATE TABLE BEFORE STARTING SERVER
createUserTable();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
