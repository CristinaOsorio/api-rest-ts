import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwtMiddleware } from "../middlewares/session";

const router = Router();

router.get('/', checkJwtMiddleware, getItems);

export { router }