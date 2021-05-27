const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Query {
    login: String
    createEvent: String
  }

  schema{
    query:Query
  }
`);

module.exports = schema;
