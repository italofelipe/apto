/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Repository from '../Repository/Repository';
import { StyledRepositories, StyledTitle } from './styles';
import { StyledLink } from '../../styles/index';

const Repositories = (props) => {
  console.log('EVENTO', props);
  return (
    <StyledRepositories>
      {props.repositories[0]?.map((repo) => (
        <StyledLink
          key={repo.id}
          to={{
            pathname: '/rep',
            state: { repo },
          }}
        >
          <Repository
            name={repo.name}
            description={repo.description}
            forks={repo.forks}
            lang={repo.language}
            disabled={repo.disabled}
            issues={repo.open_issues}
            stars={repo.stargazers_count}
          />
        </StyledLink>
      ))}
    </StyledRepositories>
  );
};

export default Repositories;
