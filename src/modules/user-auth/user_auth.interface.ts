import { Model } from 'mongoose';
import { USER_ROLE } from './user_auth.constant';
export type TLoginUser = {
  email: string;
  password: string;
};
export type TUserWithId = TUser & {
  _id: string;
  createdAt?: string;
  updatedAt: string;
};
export interface TUser {
  name: string;
  email: string;
  password: string;
}

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
