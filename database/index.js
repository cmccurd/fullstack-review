const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

let repoSchema = mongoose.Schema({
  name: String,
  url: {
    type: String,
    required: true,
    unique: true
  },
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);


let createRepo = (/* TODO */) => {
  //This isn't needed

}

module.exports.createRepo = createRepo;
module.exports.Repo = Repo;