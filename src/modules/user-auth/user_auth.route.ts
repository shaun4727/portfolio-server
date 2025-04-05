import express from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';
import { userValidations } from './user_auth.validation';
import { UserControllers } from './user_auth.controller';

const router = express.Router();

router.post(
  '/login',
  validateMiddleware(userValidations.loginValidationSchema),
  UserControllers.userLogin
);

router.post(
  '/refresh-token',
  // validateMiddleware(userValidations.refreshTokenValidationSchema),
  UserControllers.refreshToken
);

export const UserRoutes = router;
