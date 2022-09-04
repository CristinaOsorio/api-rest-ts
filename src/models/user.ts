import { model, Schema } from "mongoose"
import { User } from "../interfaces/user.interface"

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    reuiqred: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '...'
  },
},
  {
    versionKey: false,
    timestamps: true
  });

const UserModel = model('users', UserSchema);

export default UserModel;