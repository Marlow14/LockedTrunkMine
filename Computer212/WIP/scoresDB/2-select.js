'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("scores");
}).then((scores) => {
	console.log("All the scores so far:", scores);
}).finally(() => {
	db.destroy();
});
