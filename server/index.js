const { Repo, createRepo } = require('../database/index.js');
const { getReposByUsername } = require('../helpers/github.js')

const express = require('express');
let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

var updated;
var imported;

app.post('/repos', function (req, res) {
  updated = 0;
  imported = 0;
  getReposByUsername(req.body.name)
    .then((val) => {
      var result = [];

      val.data.forEach((repo) => {
        imported++;
        var t = repo.forks
        var obj = {
          name: repo.name,
          url: repo["html_url"],
          forks: t
        };
        Repo.findOneAndDelete({url: obj.url}, (err, data) => {
          if (err) {
            console('err line 24')
          } else{
            if (data) {
              updated++;
            }
          }
        });
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

  Repo.find().sort({'forks': -1})
    .then((val) => {
      val.push({imported: imported - updated, updated: updated})
      res.send(val);
    })

});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

