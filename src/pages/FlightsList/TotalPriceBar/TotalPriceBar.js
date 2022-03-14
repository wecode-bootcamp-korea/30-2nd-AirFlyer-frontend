import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout.js';
import styled from 'styled-components';
function TotalPriceBar({ selctedTicket }) {
  const totalfare = useSelector(store => store.totalFare.price);
  const navigate = useNavigate();

  const goToInfo = () => {
    navigate('/users/mypage');
  };

  return (
    <ExpectedPriceContainer>
      <WrapperLayout>
        <PaymentWidgetBox>
          <FareTitle>예상 결제 금액</FareTitle>
          <FareBox>
            <TotalFare>
              <FarePrice>{totalfare}</FarePrice>
            </TotalFare>
          </FareBox>
          <ConfirmFareButton isActive={!!selctedTicket} onClick={goToInfo}>
            다음 여정
          </ConfirmFareButton>
        </PaymentWidgetBox>
      </WrapperLayout>
    </ExpectedPriceContainer>
  );
}

export default TotalPriceBar;

const ExpectedPriceContainer = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  background-color: #ffffff;
  height: 60px;
  width: 100%;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  z-index: 200;
`;

const PaymentWidgetBox = styled.div`
  font-size: 16px;
  line-height: 24px;
  height: 60px;
  width: 1320px;
  margin: 0 20px 0 33px;
  padding: 0 20px;
  max-width: 1320px;
  display: flex;
`;

const FareTitle = styled.h2`
  font-size: 18px;
  color: black;
  height: 28px;
  width: 200px;
  padding: 20px 40px 0 0;
`;

const FareBox = styled.div`
  margin-left: 731px;
  display: flex;
  align-items: center;
`;

const TotalFare = styled.span`
  font-size: 20px;
  line-height: 36px;
  height: 58px;
  width: 136px;
  padding: 11px 40px 11px 0px;
`;

const FarePrice = styled.em`
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  margin: 0 4px 0 0;
  display: inline;
`;

const ConfirmFareButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  height: 60px;
  width: 240px;
  padding: 16px 20px;
  color: #ffffff;
  border: 1px solid #bcbcbc;
  background-color: ${props => (props.isActive ? '#118fe4;' : '#bcbcbc')};
  text-align: center;
  cursor: pointer;
`;
