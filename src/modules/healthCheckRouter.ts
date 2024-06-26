import { NextFunction, Request, Response } from "express";

export default function healthCheckRouter(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(200).json({
    status: "Service is healthy",
  });
}
