import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  
  type Query {
    greetings(name: String): String!
    add(a:Int!, b:Int!): Int

  }
`;

const resolvers = {
  Query: {
  greetings(parent,args,ctx,info){
    console.log(args);
    return 'Hello ${args.name}';
  },
  add:(_,{a,b}) => a+ b,
  },

};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server ready at: ${url}`);
