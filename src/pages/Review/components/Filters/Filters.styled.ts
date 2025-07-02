import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > button:first-child {
    margin-right: 8px;
  }
`;
