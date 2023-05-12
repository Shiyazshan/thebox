import React from "react";
import { styled } from "styled-components";

//imports
import bg from "../assets/images/bg.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <Text>
              Building things <br /> is our mission.
            </Text>
          </Content>
        </Wrapper>
      </Container>
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};
export default Home;

const Container = styled.div`
  background: url(${bg});
  height: 100vh;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: black;
  opacity: 0.4;
  border-radius: 40px 30px 194px;
  width: 46%;
  @media all and (max-width: 1080px) {
    width: 56%;
  }
  @media all and (max-width: 768px) {
    width: 80%;
  }
`;
const Text = styled.h1`
  font-family: "sans-bold";
  color: #fff;
  font-size: 80px;
  margin-left: 50px;
  @media all and (max-width: 1280px) {
    font-size: 50px;
  }
`;
