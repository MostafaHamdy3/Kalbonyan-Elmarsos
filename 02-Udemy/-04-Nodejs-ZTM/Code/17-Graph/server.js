const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

// ! means it is require

const typesArr = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArr = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArr,
    resolvers: resolversArr,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
}

startApolloServer();
