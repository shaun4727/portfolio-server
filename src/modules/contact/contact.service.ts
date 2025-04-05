import { TMessage } from './contact.interface';
import { Message } from './contact.model';

const storeMessageIntoDB = async (message: TMessage) => {
  try {
    await Message.create(message);
    return;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getMessagesFromDB = async () => {
  try {
    return await Message.find({ deleted: false });
  } catch (err) {
    console.log(err);
  }
};
const updateMessagesIntoDB = async (id: string) => {
  try {
    await Message.findByIdAndUpdate(id, {
      $set: { seen: true },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteMessagesFromDB = async (id: string) => {
  try {
    await Message.findByIdAndUpdate(id, {
      $set: { deleted: true },
    });
  } catch (err) {
    console.log(err);
  }
};

export const messageServices = {
  storeMessageIntoDB,
  getMessagesFromDB,
  updateMessagesIntoDB,
  deleteMessagesFromDB,
};
