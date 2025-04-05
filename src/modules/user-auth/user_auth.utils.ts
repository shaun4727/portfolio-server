import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userEmail: string; userId: string; name: string },
  secret: jwt.Secret | jwt.PrivateKey,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  } as jwt.SignOptions);
};
