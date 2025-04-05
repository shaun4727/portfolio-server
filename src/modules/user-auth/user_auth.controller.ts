import config from '../../app/config';
import sendResponse from '../../app/middleware/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { UserServices } from './user_auth.service';

const userLogin = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Login successful',
    data: {
      token: accessToken,
      refreshToken: refreshToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const result = await UserServices.refreshToken(
    authorization?.split(' ')[1] as string
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Access token is retrieved successfully!',
    data: result,
  });
});

export const UserControllers = {
  userLogin,
  refreshToken,
};
