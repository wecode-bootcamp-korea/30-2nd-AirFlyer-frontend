import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout';
import ReservationInfo from './ReservationInfo/ReservationInfo';
import PriceAside from './PriceAside/PriceAside';

const TravelerInfo = () => {
  localStorage.setItem(
    'access_token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.ta8E5CeZR2GWWk81EjrS_ax55AWh3eFegiacy-FihVY'
  );

  // const navigate = useNavigate();
  const submitForm = () => {
    fetch('http://10.58.6.177:8000/users/reservation', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        total_price: 120000,

        passenger_informations: [
          {
            first_name: '김',
            last_name: '성근',
            gender: '남',
            email: 'kim@naver.com',
            birth_date: '1988.06.03',
            flight_schedule_id: 1,
            seat_name: '이코노미',
          },
          {
            first_name: '박',
            last_name: '성큰',
            gender: '여',
            email: 'park@naver.com',
            birth_date: '1994.11.20',
            flight_schedule_id: 2,
            seat_name: '이코노미',
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  const checkedForm = () => {
    const checkedLogin = localStorage.getItem('access_token');
    if (!checkedLogin) {
      alert('로그인이 필요합니다.');
    } else {
      submitForm();
    }
  };

  return (
    <WrapperLayout>
      <InfoBox>
        <ReservationInfo submitForm={submitForm} />
        <PriceAside />
      </InfoBox>
      <button onClick={checkedForm}>확인용</button>
    </WrapperLayout>
  );
};

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export default TravelerInfo;
