/* eslint-disable react/prop-types */
import React from 'react';
import { StyledMain } from './styles';

const Repository = ({ location }) => {
  const { state } = location;
  return (
    <div>
      <StyledMain>
        <h2>{state.repo.name}</h2>
      </StyledMain>
    </div>
  );
};
export default Repository;
