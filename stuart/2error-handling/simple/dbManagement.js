'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

// Promise.try(() => {
// 	return db.schema.createTable("scores", (table) => {
// 		table.increments("id").primary();
// 		table.text("homeTeam");
// 		table.text("awayTeam");
//         table.integer("homeScore");
//         table.integer("awayScore");
//         table.date("date");
// 	});
// }).then(() => {
// 	console.log("Done!");
// }).catch((err) => {
// 	console.log("Errors have occured! " + err);
// }).finally(() => {
// 		db.destroy();
// });

// return Promise.try(() => {
// 	return db("scores").insert([{
// 		homeTeam: "Ravens",
// 		awayTeam: "Steelers",
//         homeScore: 25,
//         awayScore: 32,
//         date: "05 Dec 2000"
// 	}, {
//         homeTeam: "Steelers",
// 		awayTeam: "Ravens",
//         homeScore: 24,
//         awayScore: 3,
//         date: "15 Jan 2001"
//     }, {
//         homeTeam: "Ravens",
// 		awayTeam: "Steelers",
//         homeScore: 13,
//         awayScore: 27,
//         date: "22 Oct 2001"
//     }, {
//         homeTeam: "Steelers",
// 		awayTeam: "Ravens",
//         homeScore: 33,
//         awayScore: 12,
//         date: "27 Nov 2001"
//     }, {
//         homeTeam: "Ravens",
// 		awayTeam: "Steelers",
//         homeScore: 10,
//         awayScore: 31,
//         date: "28 Jan 2002"
//     }]);
// }).then(() => {
// 	console.log("Done!");
// }).finally(() => {
// 	db.destroy();
// });

Promise.try(() => {
	return db("scores");
}).then((scores) => {
	console.log("All the games:", scores);
}).finally(() => {
	db.destroy();
});