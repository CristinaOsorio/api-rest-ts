import { Request, Response } from "express"
import { registerUser, loginUser } from "./../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const { email, password, name, description } = body;
  const responseUser = await registerUser({ email, password, name, description });

  return res.send(responseUser);
}

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body
  const responseLogin = await loginUser({ email, password });
  if (responseLogin == 'NOT_FOUND_USER' || responseLogin == 'PASSWORD_INCORRECT') return res.status(404).send({ error: responseLogin });

  return res.status(201).send(responseLogin);
}

export { registerCtrl, loginCtrl }