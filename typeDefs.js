exports.typeDefs = `type Query {
    getContact(id: ID!): Contact
    getContacts: [Contact]
  }
  type Contact {
      id: ID!
      fullname: String!
      name: String!
  }
  type Mutation {
      addContact(fullname: String!, name: String!): Contact!,
      deleteContact(id: ID!): String
  }`;