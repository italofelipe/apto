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
      {props.description ? (
        <StyledDescription>{props.description}</StyledDescription>
      ) : (
        <StyledSubText>No description available</StyledSubText>
      )}
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
