import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    id:ID!
    name:String
    age:Int
    isActive:Boolean
    height:Float
  }
`;

const resolvers = {
  Query: {
    id:()=>"1",
    name:()=>"siva sai",
    age:()=>20,
    isActive:()=>true,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server ready at: ${url}`);
