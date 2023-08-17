const { ApolloServer, gql } = require("apollo-server");
const { getAllUsers, getUserByEmail, createUser } = require("./db_fake.js");

//Toda request é POST
//Toda request bate no MESMO endpoint (/graphql)

// QUERY -> Obter informações (Equivalente ao GET)
// Mutation -> Manipular dados (Equivalente a POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

// O simbolo de ! no final do tipo quer dizer que esse valor não é opcional
// que é o contrário de quando está sem que o padrão é o valor ser opcional.

// O tipo ID para o graphql é para identificar que trata-se de chave identificadora
// da sua tabela/entity e que não importa se o valor no banco é Int, String ou outro
// deve-se usar o tipo ID para ids

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String
    active: Boolean!
  }
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }
  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User
  }

  type Mutation {
    createUser(name: String, email: String): User!
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hello Word",
    users: async () => await getAllUsers(),
    getUserByEmail: async (_, args) => await getUserByEmail(args.email),
  },
  Mutation: {
    createUser: async (_, args) => await createUser(args.name, args.email),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
