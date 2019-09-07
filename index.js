const resolvers = require('./src/resolvers');
const typeDefs =  require('./src/typeDefs');

const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8002).then(({ url }) => {
console.log(`Hi Amit Server is ready at ${url}`);
});
