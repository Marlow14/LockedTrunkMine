'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("scores").insert([{
		homeTeam: "Steelers",
		awayTeam: "Ravens",
		homeScore: 22,
		awayScore: 22,
		date: knex.raw("NOW()")
	}]);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
