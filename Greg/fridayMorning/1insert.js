'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

return Promise.try(() => {
	return db("scores").insert([{
		homeTeam: "B",
		awayTeam: "P",
        homeScore: 33,
        awayScore: 0,
        gameDate: "12/03/2018"
    }]);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});