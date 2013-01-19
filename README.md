lead her forward
==============

Interactive timeline app to educate and empower girls to be public leaders

To get a server running

* Install node on your machine from [nodejs.org](http://nodejs.org)
* Navigate to the app directory
* Run `npm install`
* Run `node app`

To deploy to heroku

* Have someone add you as a collaborator to the heroku app
* Follow instructions to get the heroku command line: https://devcenter.heroku.com/articles/quickstart
* Follow instructions on https://devcenter.heroku.com/articles/collab which are as follows:
  * Add heroku as a remote
    * $ git remote add heroku git@heroku.com:leadherforward.git
    * It looks like you can also run: $ heroku git:remote
  * Deploy
    * $ git push heroku master