import { ApolloServer } from '@apollo/server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every book in our data source.
  type User {
    id: String
    name: String
    editableField: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more Users (defined above).
  type Query {
    users: [User]
  }
`;

const users = [
  {
    id: '123',
    name: 'Frank Reynolds',
    editableField: 'Some editable field',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves users from the "users" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};

export const apolloServer = new ApolloServer({ typeDefs, resolvers });
