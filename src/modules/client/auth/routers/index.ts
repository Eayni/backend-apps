import express, { Router } from "express";
import signupClientController from "../controllers/signup.controller";
import loginClientController from "../controllers/login.controller";
import LoginSchema from "../Schemas/login.schema";
import { validateRequest } from "@shared/middlewares/zodHandlers";

const authRouter: Router = express.Router();

// routers list
authRouter.post("/signup", signupClientController);
authRouter.post("/login", validateRequest(LoginSchema), loginClientController);

export default authRouter;
