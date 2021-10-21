import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    $.ajax({
      type: "get",
      url: "/repos",
      dataType: 'json',
      contentTtpe: 'application/json',
      data: {},
      success: (data) => {
        this.setState({
          repos: data
        });
      },
    })
  }

  search(term) {
    $.ajax({
      type: "POST",
      url: '/repos',
      data: JSON.stringify({ name: term }),
      success: () => {
        this.getRepos();
      },
      contentType: 'application/json'
    });
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos.slice(0, 25)} />
      <Search onSearch={this.search} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));