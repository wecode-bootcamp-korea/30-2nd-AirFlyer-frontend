import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import { close } from 'redux/isModalOpen';
import { resetInfo } from 'redux/modalInfo';

function Modal({ title, children }) {
  useLockBodyScroll();

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(close());
  };

  const resetModalInfo = () => {
    dispatch(resetInfo());
  };
  return (
    <>
      <Background
        onClick={() => {
          closeModal();
          resetModalInfo();
        }}
      />
      <ModalContainer>
        <ModalWrap>
          <Header>
            <Title>{title}</Title>
            <CloseButton
              type="button"
              onClick={() => {
                closeModal();
                resetModalInfo();
              }}
            >
              x
            </CloseButton>
          </Header>
          <div>{children}</div>
        </ModalWrap>
      </ModalContainer>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalWrap = styled.div`
  position: relative;
  height: auto;
  padding: 35px 40px;
  background-color: white;
  outline: 0;
  z-index: 9999;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  position: relative;
  top: -3px;
  background-color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export default Modal;
