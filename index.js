import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import "./src/database/dbConnection";
import colorsRouter from "./src/routes/colors.routes";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use("/apicolors", colorsRouter);
