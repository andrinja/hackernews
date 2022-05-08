import { StyledLink } from './Navbar.style';

type NavbarItemProps = {
  title: string;
  href: string;
};

export default function NavbarItem({ title, href }: NavbarItemProps) {
  return <StyledLink href={href}>{title}</StyledLink>;
}
