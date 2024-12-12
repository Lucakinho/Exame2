import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import missionRoutes from "./routes/missionRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api", missionRoutes);

export default app;

