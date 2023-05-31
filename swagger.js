import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"];

const doc = {
  info: {
    title: "Bcrypt Generator & Checker API",
    description: "API documentation for the Bcrypt Generator & Checker",
    version: "1.0.0",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Bcrypt",
      description: "Endpoints related to Bcrypt operations",
    },
  ],
};

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import("./app.js");
});
