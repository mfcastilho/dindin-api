require('dotenv/config');
const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB,
  port: Number(process.env.DB_PORT),
}, console.log('Database connected.'));

module.exports = pool;
