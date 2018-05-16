const { GraphQLServer } = require('graphql-yoga');

const typeDefs = ``;

const resolvers = {};

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({port: 6000}, () => console.log(`Server running at 6000`))