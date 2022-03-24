import React from 'react';
import styled from 'styled-components';

function LoadingSpinner() {
  return (
    <Container>
      <Wrapper>
        <LoadingIcon alt="loadingIcon" src="/images/loading.jpg" />
        <Title>진행중</Title>
        <SubTilte>잠시만 기다려주세요</SubTilte>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const LoadingIcon = styled.img`
  width: 20%;
`;

const Title = styled.h1`
  margin-top: -60px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

const SubTilte = styled.p`
  font-size: 24px;
`;

export default LoadingSpinner;
