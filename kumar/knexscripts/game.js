

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("scores", (table) => {
		table.increments("id").primary();
		table.text("hometeam");
		table.text("awayteam");
		table.text("homescore");
		table.text("awaycore");
		table.date("dateofgame");
	});
}).then(() => {
	return db("scores").insert([{
		hometeam: "Raverns",
		awayteam: "Steelers",
		homescore: "30",
		awaycore : "20",
		dateofgame : "01/01/2018"
	}, {
		hometeam: "Raverns",
		awayteam: "Patriots",
		homescore: "30",
		awaycore : "20",
		dateofgame : "01/01/2018"
	}]);
}).then( (scores) => {

    return db("scores");
}

).then ((scores) =>{
    console.log("All the hobbies of the people:", scores);
}).
catch((err) => {
	console.log("Errors have occured! " + err);
}).finally(() => {
		db.destroy();
});



