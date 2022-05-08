import { StyledNavbarItems, StyledObfuscator } from './Navbar.style';
import NavbarItem from './NavbarItem';

type Props = {
  handleCloseMenu: () => void;
  isMenuOpen: boolean;
};

const items = [
  { title: 'All', href: '/' },
  { title: 'Tech', href: '/tech' },
  { title: 'Entertainment', href: '/entertainment' },
  { title: 'Business', href: '/business' },
  { title: 'Design', href: '/design' },
];

export function NavbarItems({ handleCloseMenu, isMenuOpen }: Props) {
  return (
    <>
      <StyledObfuscator $isMenuOpen={isMenuOpen} onClick={handleCloseMenu} />
      <StyledNavbarItems $isMenuOpen={isMenuOpen}>
        {items.map((item) => {
          return (
            <NavbarItem title={item.title} href={item.href} key={item.title} />
          );
        })}
      </StyledNavbarItems>
    </>
  );
}
