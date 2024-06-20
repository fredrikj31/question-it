import { FastifyPluginAsync } from "fastify";
import { logger } from "../logger";

export const sockets: FastifyPluginAsync = async (instance) => {
  // Connection/Disconnect Events
  instance.socket.on("connection", (socket) => {
    logger.fatal({ socketId: socket.id }, "Connected");

    socket.on("disconnect", (disconnectReason) => {
      logger.fatal({ socketId: socket.id, disconnectReason }, "Disconnected");
    });
  });
};
