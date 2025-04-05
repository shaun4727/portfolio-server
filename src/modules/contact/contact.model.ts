import { model, Schema } from 'mongoose';
import { TMessage } from './contact.interface';

const MessageSchema = new Schema<TMessage>(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    seen: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Message = model<TMessage>('Message', MessageSchema);
