import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { Server } from "socket.io";

const socket = async (fastify: FastifyInstance) => {
  fastify.decorate("socket", new Server(fastify.server));
  fastify.addHook("onClose", (fastify: FastifyInstance, done) => {
    fastify.socket.close();
    done();
  });
};
export const socketPlugin = fastifyPlugin(socket);

declare module "fastify" {
  export interface FastifyInstance {
    socket: Server;
  }
}
