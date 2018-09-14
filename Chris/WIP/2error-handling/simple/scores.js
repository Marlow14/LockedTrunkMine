const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

// Promise.try(() => {
//     return db.schema.createTable("scores", (table) => {
//         table.increments("id").primary();
//         table.text("homeTeam");
//         table.text("awayTeam");
//         table.integer("homeScore");
//         table.integer("awayScore");
//         table.text("date");


//     });
// }).then(() => {
//     console.log("Done creating tables and inserting columns!");
// }).then(() => {
//     return db("scores").insert([{
//         homeTeam: "Steelers",
//         awayTeam: "Ravens",
//         homeScore: 24,
//         awayScore: 17,
//         date: "9/19/2018"
//     }]);

// }).then(() => {
//     console.log("Done adding a score!");
// }).then({
//     return db("scores");

// }).then((scores) => {
//     console.log("All the scores:", scores);
// })..catch((err) => {
//     console.log("Errors have occured! " + err);
// }).finally(() => {
//     db.destroy();
// });

Promise.try(() => {
	return db.schema.createTable("scores", (table) => {
		table.increments("id").primary();
		table.text("homeTeam");
		table.text("awayTeam");
        table.integer("homeScore");
        table.integer("awayScore");


	});
}).then(() => {
	console.log("Done!");
}).catch((err) => {
	console.log("Errors have occured! " + err);
}).finally(() => {
		db.destroy();
});

Promise.try(() => {
	return db("scores").insert([{
		homeTeam: "Steelers",
		awayTeam: "Ravens",
        homeScore: 24,
        awayScore: 17 
	}]);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});

// Promise.try(() => {
// 	return db("people");
// }).then((people) => {
// 	console.log("All the people:", people);
// }).finally(() => {
// 	db.destroy();
// });


