'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

// Promise.try(() => {
// 	return db.schema.createTable("hobbies", (table) => {
// 		table.increments("id").primary();
// 		table.text("name");
// 		table.integer("duration");
// 	});
// }).then(() => {
// 	console.log("Done!");
// }).catch((err) => {
// 	console.log("Errors have occured! " + err);
// }).finally(() => {
// 		db.destroy();
// });

// return Promise.try(() => {
// 	return db("hobbies").insert([{
// 		id: 1,
// 		name: "reading",
// 		duration: 20
// 	}, {
// 		id: 2,
// 		name: "gardening",
// 		duration: 1
// 	}, {
// 		id: 3,
// 		name: "planting",
// 		duration: 10	
// 	}]);
// }).then(() => {
// 	console.log("Done!");
// }).finally(() => {
// 	db.destroy();
// });

Promise.try(() => {
	return db("hobbies");
}).then((people) => {
	console.log("All the hobbies:", people);
}).finally(() => {
	db.destroy();
});