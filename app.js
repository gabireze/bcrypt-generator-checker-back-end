import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import bcryptRoutes from "./routes/bcryptRoutes.js";
import swaggerFile from "./swagger_output.json" assert { type: "json" };

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", bcryptRoutes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = process.env.PORT || 3000;
const hostUrl = process.env.HOST_URL || "http://localhost";

app.listen(port, () => {
  console.log(`App is listening on ${hostUrl}:${port}`);
});

export const handler = serverless(app);
