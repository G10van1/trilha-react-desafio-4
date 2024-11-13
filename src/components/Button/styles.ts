import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.6)};
  }
`;