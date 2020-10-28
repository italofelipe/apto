import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { StyledMain } from './styles';
import Form from '../../components/Form/Form';
import http from '../../services/http';
import { StyledLink, StyledH2 } from '../../styles/index';
import Org from '../../components/Orgs/Orgs';

const Main = (props) => {
  const [org, setOrg] = useState('');
  const [orgData, setOrgData] = useState(null);

  const chamar = async (e) => {
    e.preventDefault();
    try {
      const response = await http.get(`${org}`);
      setOrgData(response.data);
      setOrg('');
    } catch (error) {
      console.error('Deu pau', error);
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
            name={orgData.name}
            image={orgData.avatar_url}
            description={orgData.description}
          />
        </StyledLink>
      )}
    </StyledMain>
  );
};
export default Main;
