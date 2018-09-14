'use strict';
const config = require("./config.json");

module.exports = {
	client: "pg",
	connection: {
		host: "localhost",
		user: "postgres",
		password: "password",
		database: "studentmanagement"
	}
};
