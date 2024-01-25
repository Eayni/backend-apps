import Client from "@shared/models/client.model";
import { NextFunction, Response, Request } from "express";

export default async function loginClientController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await Client.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
}
