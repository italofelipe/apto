import React from 'react';
import { StyledForm, StyledButton, StyledInput } from './styles';

const Form = () => (
  <StyledForm>
    <StyledInput placeholder="Digite uma organização" />
    <StyledButton>Pesquisar</StyledButton>
  </StyledForm>
);
export default Form;
