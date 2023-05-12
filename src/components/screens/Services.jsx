import React, { useState } from "react";
import con from "../assets/images/services/construction.svg";
import reno from "../assets/images/services/renovation.svg";
import cons from "../assets/images/services/consultation.svg";
import rep from "../assets/images/services/renovation.svg";
import arc from "../assets/images/services/arch.svg";
import ele from "../assets/images/services/electric.svg";
import { styled } from "styled-components";
import ServiceModal from "../includes/modal/ServiceModal";
const Services = () => {
  const [isModal, setModal] = useState(false);
  const path = window.location.pathname;
  const serviceArray = [
    {
      id: 1,
      title: "Construction",
      image: con,
    },
    {
      id: 2,
      title: "Renovation",
      image: reno,
    },
    {
      id: 3,
      title: "Consultation",
      image: cons,
    },
    {
      id: 4,
      title: "Repair Services",
      image: rep,
    },
    {
      id: 5,
      title: "Architecture",
      image: arc,
    },
    {
      id: 6,
      title: "Electric",
      image: ele,
    },
  ];
  return (
    <Container type={path}>
      <Wrapper className="wrapper">
        <CardSec>
          <Title>Services</Title>
          <Cards>
            {serviceArray.map((item) => (
              <Card type={item.id} onClick={() => setModal(true)}>
                <Logo>
                  <img src={item.image} alt="construction" />
                </Logo>
                <SubTitle>{item.title}</SubTitle>
              </Card>
            ))}
          </Cards>
          <ServiceModal isModal={isModal} setModal={setModal} />
        </CardSec>
      </Wrapper>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  margin-top: ${({ type }) => (type === "/services" ? "0" : "150px")};
  background: #f6f8f7;
  padding: 30px 0;
  margin-bottom: 80px;
`;
const Wrapper = styled.div``;
const CardSec = styled.div``;
const Title = styled.h1`
  color: #292e3d;
  font-size: 40px;
  font-family: "sans-bold";
  text-align: center;
  margin-top: 50px;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 80px;
`;
const Card = styled.div`
  width: 26%;
  cursor: pointer;
  margin-bottom: 50px;
  color: #2947a9;
  font-family: "sans-bold";
  font-size: 20px;
  box-shadow: 0px 0px 37px -2px rgb(17 24 39 / 5%);
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s ease;
  transform: skew(10deg);
  &:nth-child(even) {
    background: #2947a9;
    color: #fff;
  }
  &:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  border-radius: 8px;
`;
const Logo = styled.div`
  margin-bottom: 10px;
`;
const SubTitle = styled.div``;
