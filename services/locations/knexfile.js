const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'model', 'migrations', 'dev')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'model', 'seeds', 'dev')
    }
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, 'src', 'model', 'migrations', 'test')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'model', 'seeds', 'test')
    }
  }
};