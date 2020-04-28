const connect = require("./database");
const { GraphQLServer } = require("graphql-yoga");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

connect();

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: 8000 }, ({ port }) => {
  console.log(`server start on the:  ${port}`);
});
