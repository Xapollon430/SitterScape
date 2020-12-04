import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    login: String
    createEvent: String
  }

  schema{
    query:Query
  }
`);

export default schema;
