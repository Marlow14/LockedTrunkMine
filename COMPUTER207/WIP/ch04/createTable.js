'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("scores", (table) => {
		table.increments("id").primary();
		table.text("homeTeam");
		table.text("awayTeam");
		table.integer("homeScore");
		table.integer("awayScore");
		table.date("date");
	});
}).then(() => {
	console.log("Done!");
}).catch((err) => {
	console.log("Errors have occured! " + err);
}).finally(() => {
		db.destroy();
});

