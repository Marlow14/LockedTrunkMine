const knex = require('knex');
const knexConfig = require('./knexfile');
const config = require('./config.json');

const db = knex(knexConfig[config.env]);

module.exports = db;
