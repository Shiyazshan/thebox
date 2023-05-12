import React from "react";
import head from "../assets/images/about/headphone.svg";
import flight from "../assets/images/about/flight.svg";
import { styled } from "styled-components";
import ceo from "../assets/images/about/ceo.jpg";

const About = () => {
  return (
    <Container>
      <Wrapper className="wrapper">
        <Reputation>
          <Text>Our Reputation</Text>
          <Cards>
            <Card>
              <Icon>
                <img src={head} alt="headphone" />
              </Icon>
              <Title>Best Services</Title>
              <Description>
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </Description>
            </Card>
            <Card>
              <Icon>
                <img src={head} alt="headphone" />
              </Icon>
              <Title>Best Teams</Title>
              <Description>
                Ultricies at ipsum nunc, tristique nam lectus.
              </Description>
            </Card>
            <Card>
              <Icon>
                <img src={flight} alt="headphone" />
              </Icon>
              <Title>Best Designs</Title>
              <Description>
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </Description>
            </Card>
          </Cards>
        </Reputation>
        <AboutSection>
          <Cover>
            <Poster>
              <img src={ceo} alt="ceo" />
            </Poster>
            <AboutCard>
              <TitleText>About Us</TitleText>
              <DescriptionText>
                For more than 30 years we have been delivering world-class
                construction and we’ve built many lasting relationships along
                the way.
              </DescriptionText>
              <DescriptionText>
                We’ve matured into an industry leader and trusted resource for
                those seeking quality, innovation and reliability when building
                in the U.S.
              </DescriptionText>
              <Button>More on Our History </Button>
            </AboutCard>
          </Cover>
        </AboutSection>
      </Wrapper>
    </Container>
  );
};

export default About;

const Container = styled.div``;
const Wrapper = styled.div``;
const Reputation = styled.div``;
const Br = styled.br`
  margin-bottom: 10px;
`;
const Text = styled.div`
  color: #292e3d;
  font-size: 40px;
  font-family: "sans-bold";
  text-align: center;
  margin-top: 50px;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
const Card = styled.div`
  border: 1.4px solid #e0e3eb;
  width: 20%;
  margin-right: 50px;
  height: 150px;
  padding: 20px;
  @media all and (max-width: 768px) {
    margin-right: 15px;
    height: 200px;
    width: 25%;
  }
`;
const Icon = styled.div`
  margin-bottom: 15px;
`;
const Title = styled.div`
  font-family: "sans-bold";
  color: #3d445c;
  font-size: 20px;
  margin-bottom: 5px;
`;
const Description = styled.p`
  color: #858ead;
  line-height: 24px;
`;
const AboutSection = styled.div`
  margin-top: 150px;
`;
const Cover = styled.div`
  position: relative;
`;
const Poster = styled.div`
  width: 60%;
  img {
    display: block;
    width: 100%;
  }
  @media all and (max-width: 1280px) {
    width: 70%;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const AboutCard = styled.div`
  background: #2947a9;
  color: #fff;
  max-width: 30%;
  position: absolute;
  right: 300px;
  padding: 20px 40px;
  top: 70px;
  @media all and (max-width: 1280px) {
    top: 20px;
    right: 60px;
  }
  @media all and (max-width: 1080px) {
    top: -49px;
    right: 0;
  }
  @media all and (max-width: 768px) {
    max-width: 100%;
    position: inherit;
  }
`;
const TitleText = styled.h2`
  font-size: 36px;
  font-family: "sans-bold";
`;
const DescriptionText = styled.p`
  font-size: 22px;
  line-height: 34px;
  font-family: "sans-regular";
  @media all and (max-width: 1280px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const Button = styled.div`
  background: #fff;
  padding: 12px 24px;
  color: #2947a9;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
`;
