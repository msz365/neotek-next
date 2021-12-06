import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";
import logo from "../../public/neotek-logo-small.png";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(20px);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  margin-left: -30px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outlie: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none !important;
  transition: 0.2s ease-in-out;
  text-decoration: none !important;
  color: #fff;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #650004;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #650004;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #650004;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: auto;
  font-weight: bold;
  text-decoration: none;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Link href="/" passHref>
          <NavLogo>
            <Image src={logo} height="60px" width="60px" alt="logo" />
          </NavLogo>
        </Link>
        <SidebarMenu>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link href="/" passHref>
              <SidebarLink onClick={toggle}>Home</SidebarLink>
            </Link>
          </li>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link href="/about" passHref>
              <SidebarLink onClick={toggle}>About</SidebarLink>
            </Link>
          </li>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link href="/products" passHref>
              <SidebarLink onClick={toggle}>Products</SidebarLink>
            </Link>
          </li>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link href="/services" passHref>
              <SidebarLink onClick={toggle}>Services</SidebarLink>
            </Link>
          </li>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link href="/contact" passHref>
              <SidebarLink onClick={toggle}>Contact</SidebarLink>
            </Link>
          </li>
          {/* <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="http://erp.neotek.com.pk">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
