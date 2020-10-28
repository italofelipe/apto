import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faMapMarker,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyledMain,
  StyledImage,
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderSubContainer,
} from './styles';
import { StyledTitle, StyledGreen } from '../../styles/index';
import http from '../../services/http';
import Repositories from '../../components/Repositories/Repositories';
import { StyledSubText } from '../../components/Orgs/styles';

const Org = (props) => {
  const handleLoad = () => {
    if (!props || props === {}) {
      window.location.href = 'http://localhost:3000/';
    }
  };
  handleLoad();
  const [org, setOrg] = useState(props.location.state);
  const [repos, setRepos] = useState([]);

  const chamar = async () => {
    const { orgData } = org;
    try {
      const repositories = await http.get(`${orgData.repos_url}`);
      setRepos([repositories.data]);
    } catch (error) {
      console.error('Deu pau', error);
      setRepos([]);
    }
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    chamar();
  }, []);
  return (
    <div>
      <StyledMain>
        <StyledHeader>
          <StyledHeaderContainer size="md">
            <StyledImage src={org.orgData.avatar_url} />
            <StyledTitle>{org.orgData.name || org.orgData.login}</StyledTitle>
            <StyledHeaderSubContainer>
              <FontAwesomeIcon icon={faBoxes} />
              <StyledSubText>{org.orgData.public_repos}</StyledSubText>

              {org.orgData.location && (
                <>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <StyledSubText>{org.orgData.location}</StyledSubText>
                </>
              )}

              {org.orgData.is_verified && (
                <>
                  <FontAwesomeIcon icon={faUserCheck} />
                  <StyledGreen>Verified</StyledGreen>
                </>
              )}
            </StyledHeaderSubContainer>
          </StyledHeaderContainer>
          <StyledHeaderContainer center>
            <StyledSubText>{org.orgData.description}</StyledSubText>
          </StyledHeaderContainer>
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
