const config = {
  dev: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    // timezone: "+09:00",
  },
};

module.exports = config;
