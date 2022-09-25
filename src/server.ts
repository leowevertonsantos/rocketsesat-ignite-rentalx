import express from "express";
import { routerApp } from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routerApp);

app.listen(3333, () => {
  console.log("Server is running.");
});
