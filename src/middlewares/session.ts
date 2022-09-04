import { NextFunction, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJwtMiddleware = (req: RequestExt, res: Response, next: NextFunction) => {

  try {

    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser?.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };

    if (!isUser) {
      res.status(401);
      res.send('JWT_INVALID');
    }

    req.user = isUser;
    next();

  } catch (e) {
    res.status(400);
    res.send("SESSION_INVALID");
  }

}

export { checkJwtMiddleware }

