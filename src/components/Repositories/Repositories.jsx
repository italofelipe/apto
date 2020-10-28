/* eslint-disable react/prop-types */
import React from 'react';
import Repository from '../Repository/Repository';
import { StyledRepositories, StyledTitle } from './styles';

const Repositories = ({ repositories, org }) => {
  console.log('PROPS', org);
  return (
    <StyledRepositories>
      <StyledTitle>
        Showing repos for:
        {org}
      </StyledTitle>
      {repositories[0]?.map((repo) => (
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
};

export default Repositories;
