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
        table.date("gameDate");
}).then(() => {
    return db("scores").insert([{
        homeTeam: "Ravens",
        awayTeam: "Steelers",
         homeScore: 21,
        awayScore: 20,
        gameDate: "2018-09-16"
    }, {
        homeTeam: "Steelers",
        awayTeam: "Ravens",
        homeScore: 21,
        awayScore: 0,
        gameDate: "2018-09-23"
    }
    ]);
}).then((scores) => {
	console.log("All the scores:", scores);

}).then(() => {
	return console.log("Done!");
}).catch((err) => {
    return console.log("Errors have occured! " + err);
});});