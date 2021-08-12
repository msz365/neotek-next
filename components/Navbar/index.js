import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../public/Logo.png";
import styled from "styled-components";
import { Link } from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "./Dropdown";

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#333333" : "transparent")};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24;
  max-width: 1100px;
`;
const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
const Img = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  height: 45px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid #650004;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #650004;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #650004;
    border: 1px solid #650004;
  }
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
    console.log(dropdown);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <IconContext.Provider value={{}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo href="/" onClick={toggleHome}>
              <Image src={logo} alt="Neotek" height="45px" width="150px" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  href="/about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact={true}
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLinks
                  href="/products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact={true}
                  offset={-80}
                >
                  Products
                  <RiArrowDropDownLine style={{ fontSize: "1.8rem" }} />
                </NavLinks>
                {dropdown && <Dropdown />}
              </NavItem>
              <NavItem>
                <NavLinks
                  href="/services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact={true}
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  href="/contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact={true}
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="http://erp.neotek.com.pk">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
