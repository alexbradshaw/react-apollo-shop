const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const asciify = require('asciify-image');

const asciiVarients = {
  color: true,
  fit:    'box',
  width:  140,
  height: 70
};

const asciiArt = asciify('./images/alex_ascii.jpeg', asciiVarients, (err, asciified) => {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve /build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

console.log(asciiArt);