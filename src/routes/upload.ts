import { Router } from "express";
import multerMiddleware from "../middlewares/multer";
import { checkJwtMiddleware } from "../middlewares/session";
import { getFile } from './../controllers/upload'

const router = Router();

router.post('/', checkJwtMiddleware, multerMiddleware.single('myfile'), getFile);

export { router }