import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  
  type Query {
    greetings:[String]
    luckynumbers:[Int]
    temperatures:[Float]
    flags:[Boolean]
    ids:[ID]

  }
`;

const resolvers = {
  Query: {
    greetings:()=>["Hello","Hi","Hey"],
    luckynumbers:()=>[1,2,7,5],
    temperatures:()=>[12.3,14.5,12.3],
    flags:()=>[true,false,true],
    ids:["id_1","id_2","id_3"]
  },

};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server ready at: ${url}`);
