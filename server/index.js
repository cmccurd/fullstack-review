const { Repo, createRepo } = require('../database/index.js');
const { getReposByUsername } = require('../helpers/github.js')

const express = require('express');
let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log(req.body.name);
  getReposByUsername(req.body.name)
    .then((val) => {
      var result = [];

      val.data.forEach((repo) => {
        var t = repo.forks
        var obj = {
          name: repo.name,
          url: repo["html_url"],
          forks: t
        };
        result.push(obj);
      });
      Repo.create(result)
      .then((val) => {
        res.status(200).send(val);
      });
    })
    .catch(() => {
      res.status(400).send('this username can\'t be found');
    });
});

app.get('/repos', function (req, res) {

  // This route should send back the top 25 repos
  Repo.find()
    .then((val) => {
      // var topForks;
      // val.forEach(({fork}) => {
      //   topForks.push(fork);
      // });
      // topForks.sort();
      res.send(val);
    })

});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

