import clientRouter from "@modules/client";
import healthCheckRouter from "@modules/healthCheckRouter";
import errorHandler from "@shared/middlewares/errorHandler";
import rateLimiter from "@shared/middlewares/rateLimiter";
import requestLogger from "@shared/middlewares/requestLogger";
import { getCorsOrigin } from "@shared/utils/envConfig";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import helmet from "helmet";
import path from "path";
import { pino } from "pino";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const logger = pino({ name: "server start" });
const app: Express = express();
const corsOrigin = getCorsOrigin();

// Middlewares
app.use(cors({ origin: [corsOrigin], credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger());
app.use(express.json());
// Routes
app.all("/", healthCheckRouter);
app.use("/client", clientRouter);

// Error handlers
app.use(errorHandler());

export { app, logger };
