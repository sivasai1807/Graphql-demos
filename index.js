import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Post {
    id:ID!
    title:String!
    body:String!
    tags:[String]
    
  }
  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () =>[
     {
        id:"1",
        title:"Post 1",
        body:"Body of post 1",
        tags:["tag1","tag2"],
     },
     {
        id:"2",
        title:"Post 2",
        body:"Body of post 2",
        tags:["tag3","tag4"],
     }
    ]
  },

};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server ready at: ${url}`);
