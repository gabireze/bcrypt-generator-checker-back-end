import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import dotenv from "dotenv";
import bcryptRoutes from "./routes/bcryptRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", bcryptRoutes);

const port = process.env.PORT || 3000;
const hostUrl = process.env.HOST_URL || "http://localhost";

app.listen(port, () => {
  console.log(`App is listening on ${hostUrl}:${port}`);
});

export const handler = serverless(app);
