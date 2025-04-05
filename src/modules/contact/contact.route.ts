import express from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';
import { contactValidations } from './contact.validation';
import { messageControllers } from './contact.controller';
import { USER_ROLE } from '../user-auth/user_auth.constant';
import auth from '../../app/middleware/auth';

const router = express.Router();

router.post(
  '/send-message',
  validateMiddleware(contactValidations.contactValidationSchema),
  messageControllers.messageStore
);

router.get(
  '/get-message',
  auth(USER_ROLE.admin),
  messageControllers.getMessages
);
router.patch(
  '/update-message/:message_id',
  auth(USER_ROLE.admin),
  messageControllers.updateMessages
);
router.delete(
  '/update-message/:message_id',
  auth(USER_ROLE.admin),
  messageControllers.deleteMessages
);

export const MessageRoutes = router;
