import pg from './database';

const config = {
  db: {},
  port: parseInt(process.env.PORT || '8000'),
  host: process.env.HOST || 'localhost'
};

if (process.env.NODE_ENV !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

config.db = pg();

export default config;
