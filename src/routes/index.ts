import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const routerApp = Router();

routerApp.use("/categories", categoriesRoutes);
routerApp.use("/specifications", specificationsRoutes);

export { routerApp };
