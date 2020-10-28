import React from 'react';

import {
  StyledOrg,
  StyledRepoTitle,
  StyledDescription,
  StyledOrgContainer,
  StyledSubText,
} from './styles';

const Org = (props) => (
  <StyledOrgContainer>
    <StyledOrg>
      <StyledRepoTitle>{`${props.name || props.login}`}</StyledRepoTitle>
      {props.description ? (
        <StyledDescription>{props.description}</StyledDescription>
      ) : (
        <StyledSubText>No description available</StyledSubText>
      )}
    </StyledOrg>
  </StyledOrgContainer>
);

export default Org;
