import { device } from '../../theme';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  height: 2rem;
  width: 2rem;
  background: none;
  border: none;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  ${device.sm} {
    display: none;
  }
`;
