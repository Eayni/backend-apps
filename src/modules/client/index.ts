import express, { Router } from "express";
import authRouter from "./auth/routers";

const clientRouter: Router = express.Router();

clientRouter.use("/auth", authRouter);

export default clientRouter;
