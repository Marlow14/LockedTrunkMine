'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

return Promise.try(() => {
	return db("scores").insert([{
		homeTeam: "Giants",
		awayTeam: "Ravens",
		homescore: "27",
		date: "10-16-2016"
	}, {
		homeTeam: "Ravens",
		awayTeam: "Giants",
		homescore: "19",
		date: "10-06-2016"
	}]);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
