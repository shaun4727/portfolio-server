import express from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';
import { contactValidations } from './contact.validation';
import { messageControllers } from './contact.controller';

const router = express.Router();

router.post(
  '/send-message',
  validateMiddleware(contactValidations.contactValidationSchema),
  messageControllers.messageStore
);

router.get('/get-message', messageControllers.getMessages);
router.patch('/update-message/:message_id', messageControllers.updateMessages);
router.delete('/update-message/:message_id', messageControllers.deleteMessages);

export const MessageRoutes = router;
