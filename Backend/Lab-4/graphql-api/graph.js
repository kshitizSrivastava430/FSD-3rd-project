const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
  Name: () => {
    return 'krishna';
  },
  Email: () => {
    return 'krishna@gmail.com';
  },
  RollNo: () => {
    return 20;
  }
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }),
);

const PORT = 4000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
}

module.exports = app;
