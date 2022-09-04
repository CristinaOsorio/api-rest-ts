import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET);
  return jwt;
}

const verifyToken = (jwt: string) => {
  const isOK = verify(jwt, JWT_SECRET);
  return isOK;
}

export { generateToken, verifyToken }