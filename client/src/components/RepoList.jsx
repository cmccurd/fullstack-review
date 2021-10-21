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
    Here are the top {props.repos.length} repos.
    <div>{`${props.imported ? props.imported : 0} new repos imported, ${props.updated ? props.updated : 0} repos updated.`}</div>
  </div>
)

export default RepoList;