leadherforward
==============

Interactive timeline app to educate and empower girls to be public leaders

To get a server running

* Install node on your machine from [nodejs.org](http://nodejs.org)
* Navigate to the app directory
* Run `npm install`
* Run `node app`

To get MongoJS

First make sure you have MongoDB installed. Several executables (at least on windows) will be present. 'mongod' is the one corresponding to the MongoDB server. Make sure it's running. You can also start up the Mongo shell and type 'use LHFdb' to switch from the test database to the LHFdb (once LHFdb is spawned). Then use the command:

*Run 'npm install mongojs'

I have a separate file called db_generator.js that I have to add a few lines to. Ideally, whoever is maintaining the database can paste the text fields from the Google Drive document into this and append + save these changes to LHFdb over time. -Patrick 1/11/13


