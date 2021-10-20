const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{ useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  name: String,
  url: String,
  fork: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let createRepo = (/* TODO */) => {
  Repo.insertMany()

}


module.exports.createRepo = createRepo;
module.exports.Repo = Repo;