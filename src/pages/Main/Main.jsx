import React, { useState, useEffect } from 'react';
import { StyledMain } from './styles';
import Form from '../../components/Form/Form';
import Error from '../../components/Error/Error';
import http from '../../services/http';
import { StyledLink, StyledH2, StyledTitle } from '../../styles/index';
import Org from '../../components/Orgs/Orgs';

const Main = (props) => {
  const [org, setOrg] = useState('');
  const [orgData, setOrgData] = useState(null);
  const [errorREQ, setErrorREQ] = useState(null);

  const chamar = async (e) => {
    e.preventDefault();
    try {
      const response = await http.get(`${org}`);
      setOrgData(response.data);
      setErrorREQ(null);
      setOrg('');
    } catch (error) {
      console.error('Deu pau', error);
      setErrorREQ(true);
      setOrgData(null);
    }
  };
  return (
    <StyledMain>
      <StyledH2>
        Desafio da APTO, feito com React, React Router DOM e Styled Components
      </StyledH2>
      <Form change={(e) => setOrg(e.target.value)} val={org} sub={chamar} />
      {orgData && (
        <StyledLink
          to={{
            pathname: '/org',
            state: { orgData },
          }}
        >
          <Org
            name={orgData.name || orgData.login}
            image={orgData.avatar_url}
            description={orgData.description}
          />
        </StyledLink>
      )}
      {errorREQ && <Error />}
    </StyledMain>
  );
};
export default Main;
