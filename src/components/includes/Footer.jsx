import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import text from "../assets/images/text.svg";
import face from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper className="wrapper">
          <Content>
            <LeftSection>
              <Item>
                <h4>Address : </h4>
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </Item>
              <Item>
                <h4>Phone : </h4>
                <a href="tel:6031112298">6031112298</a>
              </Item>
              <Item>
                <h4>Email : </h4>
                <a href="mailto:hello@thebox.com">hello@thebox.com</a>
              </Item>
              <Logo>
                <ImageContainer>
                  <img src={logo} alt="logo" />
                </ImageContainer>
                <ImageContainer>
                  <img src={text} alt="logo" />
                </ImageContainer>
              </Logo>
            </LeftSection>
            <RightSection>
              <News>
                <h4> Newsletter :</h4>
                <CoverNews>
                  <input type="email" placeholder="Your mail here" />
                  <Button>Subscribe</Button>
                </CoverNews>
              </News>
              <News>
                <h4>Social :</h4>
                <LogoContainer>
                  <a href="#">
                    <img src={face} alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src={linkedin} alt="Linkedin" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </LogoContainer>
              </News>
            </RightSection>
          </Content>
        </Wrapper>
      </Container>
      <Banner>
        <Wrapper className="wrapper">
          <CoverBann>
            <TextBanner>TheBox Company © 2022. All Rights Reserved</TextBanner>
          </CoverBann>
        </Wrapper>
      </Banner>
    </>
  );
};

export default Footer;

const Container = styled.div`
  padding: 60px 0;
`;
const Wrapper = styled.div``;
const CoverBann = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Banner = styled.div`
  background: #2947a9;
  height: 60px;
`;
const TextBanner = styled.h4`
  color: #fff;
  font-family: "sans-regular";
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4 {
    color: #2947a9;
    font-size: 22px;
    font-family: "sans-regular";
    margin-right: 10px;
  }
  span {
    color: #292e3d;
    font-size: 22px;
    font-family: "sans-regular";
    text-decoration: none;
  }
  a {
    color: #292e3d;
    font-size: 22px;
    font-family: "sans-regular";
    text-decoration: none;
  }
`;
const LeftSection = styled.div``;
const Logo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30%;
`;
const ImageContainer = styled.div``;
const RightSection = styled.div`
  width: 30%;
`;
const News = styled.div`
  h4 {
    color: #2947a9;
    font-size: 22px;
    font-family: "sans-regular";
  }
`;
const CoverNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 45px;
    width: 100%;
    border: 1px solid #e0e3eb;
    border-radius: 5px;
    padding-left: 20px;
    outline-color: #e0e3eb;
    margin-right: 10px;
  }
`;
const Button = styled.div`
  background: #f9995d;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 45px;
  border: 1px solid #f9995d;
  color: #fff;
  width: 150px;
  border-radius: 5px;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
