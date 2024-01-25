import { Document, model, Schema } from "mongoose";
import { IClient } from "./client.model";

/**
 * Type to model the Profile Schema for TypeScript.
 * @param Client:ref => Client._id
 * @param firstName:string
 * @param lastName:string
 * @param Clientname:string
 */

export type TProfile = {
  Client: IClient["_id"];
  firstName: string;
  lastName: string;
  Clientname: string;
};

/**
 * Mongoose Document based on TProfile for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TProfile
 * @param Client:ref => Client._id
 * @param firstName:string
 * @param lastName:string
 * @param Clientname:string
 */

export interface IProfile extends TProfile, Document {}

const profileSchema: Schema = new Schema({
  Client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  Clientname: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Mongoose Model based on TProfile for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TProfile
 * @param Client:ref => Client._id
 * @param firstName:string
 * @param lastName:string
 * @param Clientname:string
 */

const Profile = model<IProfile>("Profile", profileSchema);

export default Profile;
