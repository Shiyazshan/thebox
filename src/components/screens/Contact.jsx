import React from "react";
import styled from "styled-components";
const Contact = () => {
  const path = window.location.pathname;
  return (
    <Container type={path}>
      <Wrapper className="wrapper">
        <Content>
          <Title>What can us do for you?</Title>
          <Description>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </Description>
          <Form>
            <Cover>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone" />
              <input type="text" placeholder="Reason for Contacting*" />
            </Cover>
            <TextArea placeholder="Enter you message"></TextArea>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  margin-top: ${({ type }) => (type === "/contact" ? "0" : "160px")};
  background: #f6f8f7;
  padding: 50px 0;
`;
const Wrapper = styled.div``;
const Content = styled.div``;
const TextArea = styled.textarea`
  width: 95%;
  height: 160px;
  border: 1px solid #e0e3eb;
  padding-left: 20px;
  border-radius: 4px;
  outline-color: #2947a9;
  padding-top: 20px;
`;
const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input {
    height: 50px;
    outline-color: #2947a9;
    color: #292e3d;
    border: 1px solid #e0e3eb;
    border-radius: 4px;
    width: 45%;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
  }
`;
const Title = styled.h1`
  color: #292e3d;
  font-size: 40px;
  font-family: "sans-bold";
  text-align: center;
  margin-top: 50px;
`;
const Description = styled.p`
  color: #292e3d;
  font-size: 18px;
  text-align: center;
  margin-bottom: 80px;
`;
const Form = styled.form`
  width: 60%;
  margin: 0 auto;
`;
