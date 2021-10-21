const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{ useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  name: String,
  url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let createRepo = (/* TODO */) => {
  //This isn't needed

}

module.exports.createRepo = createRepo;
module.exports.Repo = Repo;