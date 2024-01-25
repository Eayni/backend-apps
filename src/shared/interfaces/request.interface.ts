import { Request } from "express";
import payload from "./payload.interface";

/**
 * Extended Express Request interface to pass Payload Object to the request. Used by the auth middleware to pass data to the request by token signing (jwt.sign) and token verification (jwt.verify).
 * @param userId:string
 */
type request = Request & payload;

export default request;
