import React, { useState } from "react";
import { styled } from "styled-components";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import text from "../assets/images/text.svg";
const Header = () => {
  const [active, setActive] = useState("home");
  const [isMenu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!isMenu);
  };
  const path = window.location.pathname;
  return (
    <>
      <MainContainer>
        <Wrapper className="wrapper">
          <Content>
            <Logo to="/">
              <ImageContainer>
                <img src={logo} alt="logo" />
              </ImageContainer>
              <ImageContainer>
                <img src={text} alt="logo" />
              </ImageContainer>
            </Logo>
            <NavItems>
              <Item
                className={path === "/" && "active"}
                onClick={() => setActive("home")}
                to="/"
              >
                Home
              </Item>
              <Item
                className={path === "/about" && "active"}
                onClick={() => setActive("about")}
                to="/about"
              >
                About Us
              </Item>
              <Item
                className={path === "/services" && "active"}
                onClick={() => setActive("services")}
                to="/services"
              >
                Services
              </Item>
              <Item
                className={path === "/gallery" && "active"}
                onClick={() => setActive("gallery")}
                to="/gallery"
              >
                Gallery
              </Item>
              <Item
                className={path === "/contact" && "active"}
                onClick={() => setActive("contact")}
                to="/contact"
              >
                Contact
              </Item>
            </NavItems>
            <Hamburger>
              <input
                type="checkbox"
                id="checkbox1"
                class="checkbox1 visuallyHidden"
              />
              <label for="checkbox1">
                <div class="hamburger hamburger1" onClick={() => handleClick()}>
                  <span class="bar bar1"></span>
                  <span class="bar bar2"></span>
                  <span class="bar bar3"></span>
                  <span class="bar bar4"></span>
                </div>
              </label>
            </Hamburger>
            <NavMenu className={isMenu && "active"}>
              <MenuItems to="/" onClick={() => setMenu(false)}>
                Home
              </MenuItems>
              <MenuItems to="/about" onClick={() => setMenu(false)}>
                About Us
              </MenuItems>
              <MenuItems to="/services" onClick={() => setMenu(false)}>
                Services
              </MenuItems>
              <MenuItems to="/gallery" onClick={() => setMenu(false)}>
                Gallery
              </MenuItems>
              <MenuItems to="/contact" onClick={() => setMenu(false)}>
                Contact
              </MenuItems>
            </NavMenu>
          </Content>
        </Wrapper>
      </MainContainer>
      <Outlet />
    </>
  );
};
export default Header;
const MainContainer = styled.div`
  padding: 20px;
  background: #fff;
  position: relative;
`;
const Logo = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30%;
`;
const ImageContainer = styled.div``;
const NavMenu = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  width: 100%;
  z-index: 10000;
  top: -1568px;
  left: 0;
  transition: 0.4s ease;
  &.active {
    transition: 0.4s ease;
    top: 68px;
  }
`;
const MenuItems = styled(Link)`
  font-size: 28px;
  margin: 20px;
  text-decoration: none;
`;
const Hamburger = styled.div`
  display: none;
  @media all and (max-width: 768px) {
    display: block;
  }
`;
const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media all and (max-width: 1080px) {
    width: 60%;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const Item = styled(Link)`
  cursor: pointer;
  font-family: "sans-regular";
  font-size: 20px;
  color: #14171f;
  text-decoration: none;
  &:hover {
    color: #f9995d;
  }
  &.active {
    color: #f9995d;
  }
`;
