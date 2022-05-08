import styled from 'styled-components';
import { theme } from 'theme';

export const StyledSortButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledSortButton = styled.button<{ $isActive: boolean }>`
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  background-color: ${(p) => (p.$isActive ? theme.colors.text.light : 'white')};
  box-shadow: ${(p) =>
    p.$isActive ? 'none' : '0px 2px 8px rgba(0, 0, 0, 0.16)'};
  border-radius: ${theme.borderRadius.sm};
  text-transform: capitalize;
  border: 0;
`;
