import React from "react";
//package
import styled from "styled-components";

function ServiceModal({ isModal, setModal }) {
  const handleOver = () => {
    setModal(!isModal);
  };
  return (
    <MainContainer>
      {isModal ? <Overlay onClick={() => handleOver()}></Overlay> : ""}
      <BackContainer style={{ transform: isModal && "scale(1,1)" }}>
        <Modal type="textarea">
          <div class="background">
            <div class="container">
              <div class="screen">
                <div class="screen-header">
                  <div class="screen-header-left">
                    <div
                      class="screen-header-button close"
                      onClick={() => handleOver()}
                    ></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>Enquire with</span>
                      <span>US</span>
                    </div>
                    <div class="app-contact">
                      CONTACT INFO : +62 81 314 928 595
                    </div>
                  </div>
                  <div class="screen-body-item">
                    <div class="app-form">
                      <div class="app-form-group">
                        <input
                          class="app-form-control"
                          placeholder="NAME"
                          value=""
                        />
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL" />
                      </div>
                      <div class="app-form-group">
                        <input
                          class="app-form-control"
                          placeholder="CONTACT NO"
                        />
                      </div>
                      <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE" />
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CloseButtonContainer onClick={() => handleOver()}>
            <CloseButton
              src="https://dett-react-assets-bucket.s3.ap-south-1.amazonaws.com/dett-assets/11-01-2023/closebutton.svg"
              alt="close"
            />
          </CloseButtonContainer>
        </Modal>
      </BackContainer>
    </MainContainer>
  );
}
export default ServiceModal;

const MainContainer = styled.div``;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0px;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  filter: blur(1px);
`;

const BackContainer = styled.div`
  position: fixed;
  transition: 0.3s;
  transform: scale(0, 0);
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  right: 0;
  z-index: 1000;
  left: 0;
  top: 50%;
`;

const Modal = styled.div`
  margin: 0 auto;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  transition: 0.5s;
  z-index: 101;
  border-radius: 5px;
  height: auto;

  @media all and (max-width: 1280px) {
  }

  @media all and (max-width: 1150px) {
  }

  @media all and (max-width: 1080px) {
  }

  @media all and (max-width: 980px) {
  }

  @media all and (max-width: 768px) {
  }

  @media all and (max-width: 640px) {
    width: 58%;
  }

  @media all and (max-width: 600px) {
    width: 62%;
  }

  @media all and (max-width: 641px) {
    width: 50%;
  }
  @media all and (max-width: 550px) {
  }

  @media all and (max-width: 480px) {
    width: 65%;
  }
  @media all and (max-width: 360px) {
    width: 90%;
  }

  @media all and (max-width: 320px) {
    /* padding: 8px; */
    margin-top: 15px;
  }

  video {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  source {
    @media all and (max-width: 640px) {
      width: 70%;
    }
  }
`;

const CloseButtonContainer = styled.div`
  display: none;
  position: absolute;
  top: 28px;
  right: 40px;
  border-radius: 50%;
  filter: invert(1);
  cursor: pointer;

  @media all and (max-width: 480px) {
    display: block;
    top: 15px;
    right: 15px;
  }

  @media all and (max-width: 360px) {
  }

  @media all and (max-width: 320px) {
  }
`;

const CloseButton = styled.img`
  width: 100%;
  display: block;
`;
