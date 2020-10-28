import styled from 'styled-components';
import { font } from '../../styles';

export const StyledForm = styled.form`
  display: flex;
  flex-flow: row;
  height: 80px;
  margin: 20px 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px #ccc;
  padding: 15px 20px;
`;

export const StyledButton = styled.button`
  background: #2ba84a;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  height: 40px;
  font-family: ${font};
  &:hover {
    cursor: pointer;
    background: #248232;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #333;
  width: 80%;
  border-radius: 25px;
  height: 30px;
  margin: 10px 15px;
  padding: 5px;
  &::placeholder {
    font-family: ${font};
    margin-left: 10%;
  }
`;
