import React from 'react';
import Repository from '../Repository/Repository';
import { StyledRepositories } from './styles';

const Repositories = (props) => (
  <StyledRepositories>
    {props.repositories[0]?.map((repo) => (
      <Repository
        key={repo.id}
        name={repo.name}
        description={repo.description}
        forks={repo.forks}
        lang={repo.language}
        disabled={repo.disabled}
        issues={repo.open_issues}
        stars={repo.stargazers_count}
      />
    ))}
  </StyledRepositories>
);

export default Repositories;
