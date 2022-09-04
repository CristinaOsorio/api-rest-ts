import { Auth } from "../interfaces/auth.interface"
import UserModel from "../models/user"
import { User } from '../interfaces/user.interface';
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerUser = async ({ email, password, name, description }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return 'ALREADY_USER';

  const passHash = await encrypt(password);
  const newUser = await UserModel.create({ email, password: passHash, name, description });

  return newUser;
}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) return 'NOT_FOUND_USER';

  const passwordHash = checkIs.password;

  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return 'PASSWORD_INCORRECT';

  const token = generateToken(checkIs.email);

  let data = {
    user: { ...checkIs },
    token
  };

  return data;
}

export { registerUser, loginUser }