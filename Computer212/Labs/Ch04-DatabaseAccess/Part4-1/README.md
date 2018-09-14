# Chapter 4 Exercise 1: Database Access

## Objectives:
* Setup knex for project using `knex init`
* Configure usage of knex for development environment
* Update student router to use Express Promise Router
* Pass db into student router
* Use db connection to get student records to display

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. We will be connecting to the postgres database to read student records. Think about what dependencies we can use to build queries against the postgres database. Scroll down to verify and add the needed dependencies.
	```













	```

1. Install:  pg and knex and add to package.json. You can do this in one step from the command line 
`npm install -S pg knex `

1. In the terminal, use this knex CLI command ```knex init``` to create a `knexfile.js`.

1. Open the created `knexfile.js`. This version of the knexfile can be used in different environments. View the contents and note how you can setup connections for different environments.

1. Instead of hard-coding values to the database, it is better to add a `config.json` file to the project. Add this to the root directory, with this content:
	```
	{
		"env": "development",
		"database": {
			"hostname": "localhost",
			"username": "postgres",
			"password": "password",
			"database": "studentmanagement"
		}
	}
	```

1. In the knexfile.js add this reference at the top:
	``` const config = require("./config.json"); ```

1. 	Modify the dev settings in knexfile.js to look like this:
	```javascript	
	 development: {
		client: "pg",
		connection: {
		host: config.database.hostname,
		user: config.database.username,
		password: config.database.password,
		database: config.database.database
		}
 	 },
	```

1. Create a `db.js` file in the project root, that:
	* requires knex, knexfile and config
	* Creates a database connection pool passing the env from config.json
	* Try this now, or scroll down for help
	``` javascript
















	const knex = require("knex");
	const knexconfig = require('./knexfile.js'); 
	const config = require('./config.json'); 

	const db         = require('knex')(knexconfig[config.env]);

	module.exports = db;
	```

1. In `app.js`, we want to use this new module. Make sure you require it at the top of your `app.js` file. Then, pass the student router the database information. We can first update the state object and then pass the state object to the router. 

	``` javascript
	let state = {
		db: db,
		errorReporter: errorReporter
	}
	```

1. Pass the state to the student roter module like this:
	``` const students = require('./routes/students')(state); ```

1. Change the `routes/students.js` file to the structure below...it removes the hard-coded students, and changes the module.exports to a function that accepts {db}, and now uses the express-promise-router:
	```
	const expressPromiseRouter = require("express-promise-router");
	const Promise = require("bluebird");
	const moment = require('moment');
	const router = expressPromiseRouter();
	
	module.exports = function({db}) {
		
		router.get("/",  (req, res) => {
			//TODO: return a Promise that 
			// 1. tries to get the students from the database table students
			// 2. If get from db is successful, maps:
			// 2a. the first name and last name to another property called fullName
			// 2b. uses moment to set the hireDate property based on the format MM/DD/YYYY
			// 3. If map is successful, use the response to render the students view passing students
			// 4. If there is any error, render students but pass null
		});
		
		return router;
	}

	```

1. Try to complete the TODO section. Scroll down for help...
	``` javascript





















	router.get("/",  (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			student.hireDate = moment(student.hireDate, "MM/DD/YYYY")
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		}).catch(err => {
			res.render("students", {
				students: null
			});
	       });
	});
	```

1. Confirm with the pgAdmin client that you have a studentmanagement database with a student table containing records. 

1. Test your changes in the browser, do you see the student records from the database?

1. It can be helpful at times to see the generated SQL. You can do this by adding the knex-logger package to your project as a dependency in app.js.
	```npm i -S knex-logger```
	```const knexLogger = require('knex-logger');```

1. Now you can add middleware that logs the SQL calls.
	``` app.use(knexLogger(db)); ```

1. Test this is working by visiting the students URL.










