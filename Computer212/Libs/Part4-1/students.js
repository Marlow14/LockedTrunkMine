'use strict';

const Promise = require("bluebird");

module.exports = function({db}) {
	let router = require("express-promise-router")();

	router.get("/students",  (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		});
	});

	router.post("/generate", (req, res) => {
		let skillLevel = [1, 2, 3, 4, 5, 6];
		let domains = ['@gmail.com', '@yahoo.com', '@live.com', '@aol.com'];

		return Promise.try(() => {
			return range.range(0, 10);
		}).map((i) => {
			let nameFirst = faker.name.firstName();
			let nameLast = faker.name.lastName();
			let email = `${nameFirst}.${nameLast}${pickItem(domains)}`;

			return db("students").insert({
				nameFirst: nameFirst,
				nameLast: nameLast,
				email: email,
				hireDate: faker.date.between('2015-01-01', '2016-12-31'),
				htmlSkill: pickItem(skillLevel),
				cssSkill: pickItem(skillLevel),
				jsSkill: pickItem(skillLevel),
			});
		}).then(() => {
			res.redirect("/");
		});
	});



	return router;
}
