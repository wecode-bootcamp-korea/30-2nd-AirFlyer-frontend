import React from 'react';
import styled from 'styled-components';

const PriceAside = () => {
  const mileage = 5000000;
  const cost = 1000000;
  const remain = mileage - cost;
  const dotPrice = price => {
    return parseInt(price).toLocaleString();
  };

  return (
    <PriceBox>
      <h1>항공운송료</h1>
      <Price>
        <p>보유 마일리지</p> <span>{dotPrice(mileage)}원</span>
      </Price>
      <Price>
        <p>운임</p> <span>{dotPrice(cost)}원</span>
      </Price>
      <Price>
        <p>잔여 마일리지</p> <span>{dotPrice(remain)}원</span>
      </Price>
      <PriceAll>
        <p>총액</p> <span>{dotPrice(cost)}원</span>
      </PriceAll>
    </PriceBox>
  );
};

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 250px;
  height: 350px;
  padding: 50px 0;
  margin-top: 165px;
  font-size: 25px;
  font-weight: bold;
  border-top: 1px solid lightgray;
  gap: 15px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Price = styled.div`
  padding-bottom: 15px;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  span {
    border-bottom: 1px solid #000;
  }
`;

const PriceAll = styled.div`
  height: 70px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #0064de;
    font-size: 25px;
    border-bottom: 3px solid #0064de;
  }
`;

export default PriceAside;
