const {Repo, createRepo} = require('../database/index.js');
const post = require('server/models/post.js')

const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(Repo);
  res.end();
  // const test = new Repo({
  //   name: 'Sam',
  //   fork: 24
  // })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

