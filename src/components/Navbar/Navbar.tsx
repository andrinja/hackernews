import { StyledNavbar, StyledLogo } from './Navbar.style';
import { useState } from 'react';
import MenuButton from '../MenuButton';
import { NavbarItems } from './NavbarItems';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <StyledNavbar>
      <StyledLogo>Hacker news</StyledLogo>
      <NavbarItems
        isMenuOpen={isMenuOpen}
        handleCloseMenu={() => setIsMenuOpen(false)}
      />
      <MenuButton
        isMenuOpen={isMenuOpen}
        handleToggleMenu={() => setIsMenuOpen((isOpen) => !isOpen)}
      />
    </StyledNavbar>
  );
}
