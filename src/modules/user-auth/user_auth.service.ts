import { TLoginUser, TUser, TUserWithId } from './user_auth.interface';
import AppError from '../../app/utils/AppError';
import { User } from './user_auth.model';
import { createToken } from './user_auth.utils';
import config from '../../app/config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { USER_ROLE } from './user_auth.constant';

const loginUser = async (payload: TLoginUser) => {
  const user = (await User.isUserExistsByEmail(payload.email)) as TUserWithId;

  if (!user) {
    throw new AppError(401, 'Invalid credentials');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(401, 'Invalid credentials');
  }

  const jwtPayload = {
    userEmail: user.email,
    userId: user._id,
    name: user.name,
    role: USER_ROLE.admin,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid

  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string
  ) as JwtPayload;

  const { userEmail } = decoded;

  // checking if the user is exist
  const user = (await User.isUserExistsByEmail(userEmail)) as TUserWithId;

  if (!user) {
    throw new AppError(404, 'This user is not found !');
  }

  const jwtPayload = {
    userEmail: user.email,
    userId: user._id,
    name: user.name,
    role: USER_ROLE.admin,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

export const UserServices = {
  loginUser,
  refreshToken,
};
