import React, { useState, useEffect } from 'react';
import { StyledMain } from './styles';
import Form from '../../components/Form/Form';
import http from '../../services/http';
import Repositories from '../../components/Repositories/Repositories';

const Main = () => {
  const [org, setOrg] = useState('');
  const [repos, setRepos] = useState([]);
  const [orgName, setOrgname] = useState('');

  const chamar = async (e) => {
    e.preventDefault();
    setRepos([]);

    try {
      // dispatch({ type: 'FETCH_ORGS', payload: org });
      const response = await http.get(`${org}`);
      setRepos([]);
      const repositories = await http.get(`${response.data.repos_url}`);
      setOrgname(response.data.name);
      setRepos([repositories.data]);
      setOrg('');
    } catch (error) {
      console.error('Deu pau', error);
      setRepos([]);
    }
  };
  useEffect(() => {
    console.log('Respos STATE', repos);
  }, [repos]);
  return (
    <StyledMain>
      <Form change={(e) => setOrg(e.target.value)} val={org} sub={chamar} />

      {repos.length !== 0 ? (
        <Repositories repositories={repos} org={orgName} />
      ) : (
        <h2>No repositories. Search for a company so start</h2>
      )}
    </StyledMain>
  );
};
export default Main;
