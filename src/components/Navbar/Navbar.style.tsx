import styled from 'styled-components';
import { device } from 'theme';

const NAVBAR_HEIGHT = '68px';
const MENU_TRANSITION_DURATION = '0.2s';

export const StyledNavbar = styled.nav`
  align-items: center;
  background: white;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  height: ${NAVBAR_HEIGHT};
  position: fixed;
  width: calc(100vw - 2rem);
  padding: 0 1rem;
  top: 0;
  justify-content: space-between;
`;

export const StyledLogo = styled.div<{}>`
  font-size: ${(p) => p.theme.typography.title.fontSize};
  color: ${(p) => p.theme.colors.primary};
  min-width: 150px;
`;

export const StyledNavbarItems = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  position: fixed;
  top: ${NAVBAR_HEIGHT};
  right: 0;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  height: calc(100vh - ${NAVBAR_HEIGHT});
  width: calc(100vw - 4rem);
  transition: transform ${MENU_TRANSITION_DURATION};
  transform: translateX(${(p) => (p.$isMenuOpen ? '0%' : '100%')});

  ${device.sm} {
    position: initial;
    top: initial;
    right: initial;
    display: flex;
    flex-direction: row;
    transform: translateX(0%);
    background: none;
    width: 100%;
    justify-content: flex-end;
    height: auto;
    width: auto;
  }
`;

export const StyledObfuscator = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  position: fixed;
  top: ${NAVBAR_HEIGHT};
  left: 0;
  height: calc(100vh - ${NAVBAR_HEIGHT});
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity ${MENU_TRANSITION_DURATION};
  opacity: ${(p) => (p.$isMenuOpen ? '1' : '0')};
  visibility: ${(p) => (p.$isMenuOpen ? 'visible' : 'hidden')};
`;

export const StyledLink = styled.a`
  min-width: 3rem;
  padding: 1rem;
  text-decoration: none;
  font-size: ${(p) => p.theme.typography.subtitle.fontSize};
  color: ${(p) => p.theme.colors.text.secondary};
`;
