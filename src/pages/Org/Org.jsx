/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyledMain, StyledImage, StyledHeader } from './styles';
import { StyledTitle } from '../../styles/index';
import http from '../../services/http';
import Repositories from '../../components/Repositories/Repositories';

const Org = (props) => {
  console.log('PROPS REP', props);

  const [org, setOrg] = useState(props.location.state);
  const [repos, setRepos] = useState([]);

  const chamar = async () => {
    const { orgData } = org;
    console.log('org', orgData);
    try {
      const repositories = await http.get(`${orgData.repos_url}`);
      setRepos([repositories.data]);
    } catch (error) {
      console.error('Deu pau', error);
      setRepos([]);
    }
  };
  useEffect(() => {
    chamar();
    console.log('repos', repos);
    console.log('Org PROPS', org);
  }, []);
  return (
    <div>
      <StyledMain>
        <StyledHeader>
          <StyledImage src={org.orgData.avatar_url} />
          <StyledTitle>{org.orgData.name}</StyledTitle>
        </StyledHeader>
        {repos.length !== 0 ? (
          <Repositories
            repositories={repos}
            org={org.orgData.name}
            otherProps={props}
          />
        ) : (
          <h2>No repositories. Search for a company so start</h2>
        )}
      </StyledMain>
    </div>
  );
};
export default Org;
