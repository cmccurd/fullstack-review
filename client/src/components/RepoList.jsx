import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <ul>{
      props.repos.map((repo) => {
        return (<li key={`${repo._id}`}>
                  Forks - {repo.forks}&emsp;
                  {repo.name}&emsp;
                  <a href={`${repo.url}`}>{repo.url}</a>
                </li>);
      })
    }</ul>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;