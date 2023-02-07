require("dotenv").config();
 
const { PRODUCTION_URL } = process.env;
const path = require("path");
 
module.exports = {
  production: {
    client: "pg",
    connection: PRODUCTION_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
