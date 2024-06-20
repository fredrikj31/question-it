import { FastifyDynamicSwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

export const swaggerUiConfig: FastifySwaggerUiOptions = {
  routePrefix: "/docs",
  logo: {
    content: "",
    type: "",
  },
};

export const swaggerConfig: FastifyDynamicSwaggerOptions = {
  mode: "dynamic",
  swagger: {
    info: {
      title: "Testing Sockets API",
      description: 'The main and only API behind "testing sockets"',
      version: "0.0.1",
    },
    externalDocs: {
      url: "https://github.com/fredrikj31/testing-sockets",
      description: "Find more info here",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  transform: jsonSchemaTransform,
};
