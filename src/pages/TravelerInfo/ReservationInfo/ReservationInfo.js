import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TicketInfo from './TicketInfo/TicketInfo';
import PassengerInfo from './PassengerInfo/PassengerInfo';
import Caution from './Caution/Caution';
import { useState } from 'react';

const ReservationInfo = props => {
  const count = useSelector(store => store.counter.count);
  const [passengerLists, setPassengerLists] = useState(
    Array(count).fill({
      last_name: '',
      first_name: '',
      gender: '',
      birth: '',
      email: '',
    })
  );

  const handlePassengerInfo = e => {
    const { name, value, dataset } = e.target;
    const nextPassengerLists = JSON.parse(JSON.stringify(passengerLists));
    nextPassengerLists[name][`${dataset.row}`] = value;
    setPassengerLists(nextPassengerLists);
  };

  return (
    <ContentsAll>
      <Reservation>
        <Title>여정 정보</Title>
        <TicketInfo />
        <Passenger>
          <TitleBox>
            <Title>승객 정보</Title>
            <span>
              [<Required>필수 입력</Required>는 필수 입력 사항입니다.]
            </span>
          </TitleBox>
          {passengerLists.map((passenger, idx) => (
            <PassengerInfo
              key={idx}
              id={idx}
              list={passenger}
              handlePassengerInfo={handlePassengerInfo}
            />
          ))}
          <Caution />
        </Passenger>
      </Reservation>
    </ContentsAll>
  );
};

const ContentsAll = styled.article`
  display: flex;
  justify-content: center;
  margin: 100px auto;
`;

const Reservation = styled.div`
  width: 1000px;
  padding: 20px 0;
  background-color: #fff;
`;

const Passenger = styled.div`
  margin-top: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #00256c;
  line-height: 1.5;
`;

const Required = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  position: relative;
  width: 0.5rem;
  font-size: inherit;
  vertical-align: bottom;

  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #de001b;
  }
`;

export default ReservationInfo;
