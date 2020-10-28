import React, { useState, useEffect } from 'react';
import http from '../../services/http';
import { StyledForm, StyledButton, StyledInput } from './styles';

// eslint-disable-next-line react/prop-types
const Form = ({ change, val, sub }) => (
  <StyledForm onSubmit={sub}>
    <StyledInput
      value={val}
      onChange={(e) => change(e)}
      placeholder="Digite uma organização"
    />
    <StyledButton onClick={sub}>Pesquisar</StyledButton>
    <p>{val}</p>
  </StyledForm>
);
export default Form;
