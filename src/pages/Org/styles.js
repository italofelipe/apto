import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 5vh;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  margin: 5vh;
`;

export const StyledDescription = styled.p`
  font-weight: lighter;
  font-style: italic;
  font-size: 12px;
  margin: 15px;
  line-height: 16px;
`;

export const StyledSubText = styled.small`
  font-weight: lighter;
  font-size: 10px;
  margin: 15px 5vw 0px 5px;
  line-height: 12px;
`;

export const StyledImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 5vh;
`;
