const knex = require("knex");
const knexconfig = require("./knexfile");
const config = require("./config.json");

const db = require('knex')(knexconfig[config.env]);
const bookshelf = require('bookshelf')(db);

module.exports = bookshelf;