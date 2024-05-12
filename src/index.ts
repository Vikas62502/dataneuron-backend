import express, { Express } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./utils/swaggerConfig";
import dotenv from "dotenv";
import { connectDb } from "./utils/database";
import cors from "cors";

const app: Express = express();

dotenv.config();

// connectDb();

// enabling CORS
let corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5000",
  ],
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// swagger api documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
