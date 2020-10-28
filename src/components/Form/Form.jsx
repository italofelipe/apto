import React from 'react';
import { StyledForm, StyledButton, StyledInput } from './styles';

const Form = ({ change, val, sub }) => (
  <StyledForm onSubmit={sub}>
    <StyledInput
      value={val}
      onChange={(e) => change(e)}
      placeholder="Digite uma organização"
    />
    <StyledButton onClick={sub}>Pesquisar</StyledButton>
  </StyledForm>
);
export default Form;
