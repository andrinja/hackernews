import { CloseIcon, MenuIcon } from '../../icons';
import { StyledButton } from './MenuButton.style';

type MenuButtonProps = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

export default function MenuButton({
  isMenuOpen,
  handleToggleMenu,
}: MenuButtonProps) {
  return (
    <StyledButton onClick={handleToggleMenu}>
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </StyledButton>
  );
}
