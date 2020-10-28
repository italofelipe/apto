import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const font = "'Source Sans Pro', sans-serif;";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
  width: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;
export const StyledGreen = styled.h3`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #248232;
  margin: 0 5px;
`;
