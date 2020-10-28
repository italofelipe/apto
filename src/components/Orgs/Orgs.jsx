/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  StyledOrg,
  StyledRepoTitle,
  StyledDescription,
  StyledOrgContainer,
} from './styles';

const Org = (props) => (
  <StyledOrgContainer>
    <StyledOrg>
      <StyledRepoTitle>{`${props.name}`}</StyledRepoTitle>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledOrg>
  </StyledOrgContainer>
);

export default Org;
