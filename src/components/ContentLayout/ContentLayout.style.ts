import styled from 'styled-components';
import { device, theme } from 'theme';

export const StyledContentLayout = styled.main`
  display: grid;
  margin-top: calc(${theme.heights.navbar} + 1rem);
  margin-left: 1rem;
  margin-right: 1rem;
  grid-template-columns: 1fr;
  max-width: calc(100vw - 2rem);

  ${device.sm} {
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
  }
`;
