import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

//imports
import client from "../assets/images/testimonials/ourclient.jpg";
import prof from "../assets/images/testimonials/client1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const reviews = [
    {
      id: 1,
      name: "Rahul Harish",
      image: prof,
      description:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
    },
    {
      id: 2,
      name: "Shruthi Vasudev",
      image: prof,
      description:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
    },
    {
      id: 3,
      name: "Samuel sam",
      image: prof,
      description:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
    },
    {
      id: 4,
      name: "Midhun Krishna",
      image: prof,
      description:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
    },
    {
      id: 5,
      name: "Roshan Mathew",
      image: prof,
      description:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
    },
  ];
  return (
    <Container>
      <Wrapper className="wrapper">
        <Cover>
          <SliderSection>
            <Title>Our Clients Says</Title>
            <Slider {...settings}>
              {reviews.map((item) => (
                <Profile>
                  <ProfileContainer>
                    <img src={item.image} alt="profile" />
                  </ProfileContainer>
                  <Description>{item.description}</Description>
                  <Name>{item.name}</Name>
                </Profile>
              ))}
            </Slider>
          </SliderSection>
          <ImageSection>
            <ImageContainer>
              <img src={client} alt="client" />
            </ImageContainer>
          </ImageSection>
        </Cover>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div``;
const Wrapper = styled.div``;
const Cover = styled.div`
  display: flex;
  justify-content: center;
`;
const SliderSection = styled.div`
  width: 70%;
`;
const ImageSection = styled.div`
  width: 25%;
`;
const Profile = styled.div`
  margin-top: 50px;
`;
const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 15%;
  img {
    display: block;
    width: 100%;
    border-radius: 15px;
  }
`;
const Description = styled.p`
  font-size: 22px;
  line-height: 34px;
  font-family: "sans-regular";
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
`;
const Name = styled.h3`
  text-align: center;
`;
const Title = styled.h2`
  color: #292e3d;
  font-size: 40px;
  font-family: "sans-bold";
  text-align: center;
  margin-top: 50px;
  width: 80%;
`;
const ImageContainer = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;
