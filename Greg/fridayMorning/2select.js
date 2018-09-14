'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("scores");
}).then((people) => {
    console.log("All the people:", people);
    console.log(JSON.parse(people));
}).finally(() => {
	db.destroy();
});
