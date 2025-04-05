import sendResponse from '../../app/middleware/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { messageServices } from './contact.service';

const messageStore = catchAsync(async (req, res) => {
  await messageServices.storeMessageIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Message sent successfully',
  });
});

const getMessages = catchAsync(async (req, res) => {
  const result = await messageServices.getMessagesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Messages retrieved successfully',
    data: result,
  });
});

const updateMessages = catchAsync(async (req, res) => {
  const { message_id } = req.params;

  await messageServices.updateMessagesIntoDB(message_id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Messages status changed successfully',
  });
});

const deleteMessages = catchAsync(async (req, res) => {
  const { message_id } = req.params;

  await messageServices.deleteMessagesFromDB(message_id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Messages deleted successfully',
  });
});

export const messageControllers = {
  messageStore,
  getMessages,
  updateMessages,
  deleteMessages,
};
