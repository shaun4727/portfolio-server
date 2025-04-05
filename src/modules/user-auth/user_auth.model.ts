import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user_auth.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email });
};
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};
export const User = model<TUser, UserModel>('User', userSchema);
