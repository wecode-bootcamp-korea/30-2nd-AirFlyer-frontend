import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

const TicketInfo = () => {
  const depLocation = useSelector(store => store.location.depLocation);
  const arrLocation = useSelector(store => store.location.arrLocation);
  const date = useSelector(store => store.date.state[0]);
  return (
    <TicketBox>
      <Ticket>
        <h1>운항 정보</h1>
        <Information>
          <InforBox>
            <DepartureCity>
              <span>{depLocation.planet_code}</span> {depLocation.planet_name}
            </DepartureCity>
            ➤
            <ArrivalCity>
              <span>{arrLocation.planet_code}</span> {arrLocation.planet_name}
            </ArrivalCity>
          </InforBox>
          <FlightInfo>
            <span>
              {moment(date.startDate).format('YYYY-MM-DD')} 출발시각 09:40
              –도착시각 10:10
            </span>
            <p>KE091</p>
            <span>일반석</span>
          </FlightInfo>
        </Information>
      </Ticket>
    </TicketBox>
  );
};

const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`;

const Ticket = styled.div`
  display: flex;
  flex-wrap: row wrap;
  padding: 40px 30px;
  margin-bottom: 20px;
  border: 1px solid lightgray;

  h1 {
    width: 105px;
    height: 60px;
    font-size: 23px;
    font-weight: bold;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InforBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const DepartureCity = styled.div`
  font-size: 20px;
  font-size: 300;

  span {
    font-weight: bold;
    font-size: 28px;
  }
`;

const ArrivalCity = styled(DepartureCity)``;

const FlightInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  gap: 14px;

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default TicketInfo;
