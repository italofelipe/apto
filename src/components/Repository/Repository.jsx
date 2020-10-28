/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeBranch,
  faExclamationTriangle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyledRepository,
  StyledRepoTitle,
  StyledDescription,
  StyledBottomTab,
  StyledRepositoryContainer,
  StyledSubText,
} from './styles';

const Repository = (props) => (
  <StyledRepositoryContainer disabled={props.disabled}>
    <StyledRepository>
      <StyledRepoTitle>{`${props.name}:`}</StyledRepoTitle>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledRepository>

    <StyledBottomTab>
      <FontAwesomeIcon icon={faCodeBranch} />
      <StyledSubText>{props.forks}</StyledSubText>
      <StyledSubText>{props.lang}</StyledSubText>

      <FontAwesomeIcon icon={faExclamationTriangle} />
      <StyledSubText>{props.issues}</StyledSubText>

      <FontAwesomeIcon icon={faStar} />
      <StyledSubText>{props.stars}</StyledSubText>
    </StyledBottomTab>
  </StyledRepositoryContainer>
);

export default withRouter(Repository);
