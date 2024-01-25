import Client, { IClient } from "@shared/models/client.model";
import { NextFunction, Response, Request } from "express";

export default async function signupClientController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: IClient = new Client({
      password: "123",
      email: "ahmessd@mail.com",
      avatar: "ss",
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
