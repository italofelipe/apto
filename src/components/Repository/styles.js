import styled from 'styled-components';

export const StyledRepositoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  border-left: ${(props) => (props.disabled ? 'red' : '3px solid #2ba84a')};
  border-radius: 4px;
  box-shadow: 3px 3px 8px #ccc;
  margin: 10px;
  &:hover {
    transform: scale(1.02);
    border: 3px solid #2ba84a;
  }
`;
export const StyledRepository = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: auto;

  padding: 5px 10px;
`;

export const StyledBottomTab = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
`;
export const StyledRepoTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-break: auto;
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
