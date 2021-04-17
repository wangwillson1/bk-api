const Pool = require('pg').Pool;
const config = require('../config')

const pool = new Pool({
  user: config.db_config.user,
  host: config.db_config.host,
  database: config.db_config.database,
  password: config.db_config.password,
  port: config.db_config.port
});

async function getAllUsers() {
    let response;
    try {
        response = await pool.query('SELECT * FROM users');
    } catch (e) {
        throw e;
    }
    return response.rows;
}

module.exports = { getAllUsers };