'use strict';

const Promise = require("bluebird");
const moment = require('moment');

module.exports = function({db}) {
	let router = require("express-promise-router")();

	router.get("/",  (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			return student;
		}).map(student=>{
			student.hireDate = moment(student.hireDate)
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		});
	});



	return router;
}
