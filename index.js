const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Computer {
    model: String!
    maker: String!
    year: Int!
  }

  type Query {
    computers: [Computer!]!
  }
`;

const resolvers = {};

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({port: 4200}, () => console.log(`Server running at 4200`))