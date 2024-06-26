import { getMONGODBURI, getPort } from "@shared/utils/envConfig";
import { app, logger } from "@src/server";
import mongoose from "mongoose";

// connect ot DB
const DB_URI = getMONGODBURI();
mongoose.connect(DB_URI);

// run server
const port = getPort();
const server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});

const onCloseSignal = () => {
  logger.info("sigint received, shutting down");
  server.close(() => {
    logger.info("server closed");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
