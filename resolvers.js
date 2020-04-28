const Contact = require("./models");


exports.resolvers = {
  Query: {
    getContacts: async ()=> {
       const result = await Contact.find();
       return result;
    },
    getContact: async (_, { id }) => {
      var result = await Contact.findById(id);
      return result;
    },
  },
  Mutation: {
    addContact: async (_, { fullname, name }) => {
      const contact = new Contact({ fullname, name });
      await contact.save();
      return contact;
    },
    deleteContact: async (_, { id }) => {
      await Contact.findByIdAndRemove(id);
      return "Contact deleted";
    },
  },
};
