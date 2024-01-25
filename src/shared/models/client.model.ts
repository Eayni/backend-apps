import { Document, model, Schema } from "mongoose";

/**
 * Type to model the Client Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export type TClient = {
  email: string;
  password: string;
  avatar: string;
};

/**
 * Mongoose Document based on TClient for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TClient
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export interface IClient extends TClient, Document {}

const ClientSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Mongoose Model based on TClient for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TClient
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

const Client = model<IClient>("Client", ClientSchema);

export default Client;
