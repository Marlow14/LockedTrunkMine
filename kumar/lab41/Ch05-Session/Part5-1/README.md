# Chapter 5 Exercise 1: Update Login Route to use Sessions

## Objectives:
* Create a small program that generates a secret code to use in sessions
* Update the Login Route to save user info in session


## Steps 

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the `\Labs\Ch04-DatabaseAccess\Part4-2\Solution` and use it as your starting point - if you copy - be sure to run `npm install` and to run ```npx knex migrate:latest```


### Generate a secret key to be used for sessions
1. Create a small application that generates a secret key. Create a new directory called `/generate-secret-key`.

1. In this directory create a file called `index.js` that requires the Node core module `crypto` package and uses it to generate a random string. 

	```javascript
	const crypto = require("crypto");

	console.log(crypto.randomBytes(48).toString("base64"));
	```

1. Run your new program and store the generated key in the `config.json` file as a property called `"secret"`


### Add the usage of expressSession to your app

1. Add the express-session module to your app with npm install as a dependency in package.json.

1. In `app.js`, require `express-session` as a module dependency, and add it to package.json 
	
	```javascript
	const expressSession = require('express-session');
	```

1. Add this middleware in `app.js`, before any included routes. Notice that it uses `expressSession` and references the secret that is stored in the config module. 
    ``` javascript
	router.use(expressSession({
		secret: config.secret,
		resave: false,
		saveUninitialized: false,
	}));
    ```

1. Make sure there is a require for the config file in app.js.

	`const config = require('./config');`


### Promisify the session methods

1. Create a new module in the `middleware` folder called `sessions-promises.js`. Add the following code. The point of this is to be able to save, destroy and reload sessions in a way that is wrapped in a promise. Notice that in the Promise.promisify() calls, the first argument is the function to Promisify, and the second argument contains the `context` - meaning, it's passing in the `req.session` reference to look for the given function.

	```javascript

	const Promise = require("bluebird");

	module.exports = function(req, res, next) {
		req.saveSession = Promise.promisify(req.session.save, {context: req.session});
		req.destroySession = Promise.promisify(req.session.destroy, {context: req.session});
		req.reloadSession = Promise.promisify(req.session.reload, {context: req.session});
		next();
	};
	```

1. Add the inclusion of this middleware to the `app.js` - after the 
	
	`router.use(expressSession({`
	
	 and before any of the included routes. This will ensure the req object is set with the new methods, and is available on middleware that follows.

	```javascript
	router.use(require("./middleware/sessions-promises"));```
	```

### Save the User info to the session once logged in

1. Open the `index.js` route in order to store information in the session. Find the `/login` route and replace the current redirect code with this code which saves the user session info.

	``` javascript
	req.session.userId = user.id;
	req.saveSession();
	console.log(`Saved the user session`);
	res.redirect("/");
	```

1. Find the middleware that was created to log the time. Add to it so that it will display a session ID and the number of times that session was accessed. 
	``` javascript
	router.use(function (req, res, next) {
		console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);

		if (req.session.views) {
			req.session.views++
		} else {
			req.session.views = 1
		}
		console.log(`*** ID:${req.sessionID} with UserID: ${req.session.userId} has: req.session.views = ${req.session.views}`);
		next();
	});
	```

1. Ensure the app is running correctly. Open Chrome and test the URL: http://localhost:3000

1. Notice the output includes the session ID, that the user ID is undefined, and the views is 1

1. Click on a few links or refresh the browser to see the views increase

1. Open Firefox and hit the URL:  http://localhost:3000 Notice the session ID and view count is different.

1. Log in to one of the browsers using username `user` and password `pass`. Notice in the log that the UserId is now in the log message.

