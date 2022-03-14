import moment from 'moment';
import styled from 'styled-components/macro';

// TODO: 쿼리스트링 어떻게 만들지 selectedDay를 이용해서 생각해보기
// TODO: 지금 아이디어: 우선 처음으로 선택한날짜를 받아서 그 날짜 쿼리로  data 를 요청
// TODO: 클릭버튼으로 data+1 로 수정하는 function 그 쿼리가 바뀔때마다 뿌려지는 값이 바뀐다

function FlightCard({ flight_schedule_info, flight_seat_info, selectTicket }) {
  const {
    flight_schedule_id,
    departure_datetime,
    arrival_datetime,
    duration,
    departure_planet_code,
    arrival_planet_code,
    spaceship_name,
  } = flight_schedule_info;

  const departureTime = moment(departure_datetime).format('hh:mm');
  const arrivalTime = moment(arrival_datetime).format('hh:mm');
  const [hour, minute] = duration.split(':');
  const depCode = departure_planet_code;
  const arrCode = arrival_planet_code;

  function clcickTicket(target_info, seatType, seatPrice) {
    selectTicket(target_info, seatType, seatPrice);
  }

  return (
    <FlightTicket>
      <FlightTicketInfo>
        <FlightTicketInfoWrap>
          <FlightTimeBox>
            <PlanetFrom>
              <TravelTime>{departureTime}</TravelTime>
              <PlanetCode>{depCode}</PlanetCode>
            </PlanetFrom>
            <PlanetTo>
              <TravelTime>{arrivalTime}</TravelTime>
              <PlanetCode>{arrCode}</PlanetCode>
            </PlanetTo>
          </FlightTimeBox>
          <FlightDir>
            <FlightDuration>
              {+hour}시간 {+minute}분
            </FlightDuration>
          </FlightDir>
          <FlightDesc>
            <SpaceshipNum>{spaceship_name}</SpaceshipNum>
            <DescBtn>상세 보기</DescBtn>
          </FlightDesc>
        </FlightTicketInfoWrap>
      </FlightTicketInfo>
      <SeatSelection>
        <SeatSelectionWrap>
          {flight_seat_info.map(seat => (
            <SeatTypeBox
              key={seat.seat_id}
              onClick={() => {
                clcickTicket(
                  flight_schedule_info,
                  seat.seat_type,
                  seat.seat_price
                );
              }}
            >
              <FareBox>
                <SeatsType>{seat.seat_type}</SeatsType>
                <FlightFare>
                  <Fare>{seat.seat_price.toLocaleString()}</Fare>마일리지
                </FlightFare>
                <SeatAvailability>
                  {seat.seat_remain <= 5 && `${seat.seat_remain} 석`}
                </SeatAvailability>
              </FareBox>
            </SeatTypeBox>
          ))}
        </SeatSelectionWrap>
      </SeatSelection>
    </FlightTicket>
  );
}

export default FlightCard;

const FlightTicket = styled.li`
  display: flex;
  margin: 20px 0 50px 0;
`;

const FlightTicketInfo = styled.div`
  position: relative;
  width: 470px;
  border: 1px solid darkgray;
`;

const FlightTicketInfoWrap = styled.div`
  position: relative;
  padding: 30px 40px;
`;

const FlightTimeBox = styled.div`
  display: flex;
`;

const FlightDir = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  width: 200px;
  margin-left: -100px;

  &::before {
    position: absolute;
    top: 24px;
    left: 0;
    content: '-------------------------------->';
  }
`;

const FlightDuration = styled.span`
  font-size: 14px;
  line-height: 1.6;
  display: block;
  color: #00256c;
  text-align: center;
`;

const FlightDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const SpaceshipNum = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 1.58;
`;

const DescBtn = styled.button`
  display: inline-block;
  border: 1px solid #969696;
  border-radius: 14px;
  padding: 2px 10px;
  color: #555;
  font-size: 14px;
  line-height: 1.58;
  cursor: pointer;
  background: 0 0;
`;

const PlanetFrom = styled.div`
  flex: 1;
  font-size: 12px;
  text-align: left;
`;
const TravelTime = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
`;

const PlanetCode = styled.span`
  color: #767676;
  font-size: 14px;
  line-height: 1.5;
`;

const PlanetTo = styled.div`
  flex: 1;
  font-size: 12px;
  text-align: right;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////

const SeatSelection = styled.div`
  width: calc(100% - 472px);
`;

const SeatSelectionWrap = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid #d9dbe1;
`;

const SeatTypeBox = styled.div`
  flex: 1 1 30%;
  position: relative;
  border-right: 1px solid #d9dbe1;
  text-align: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: 0;
    border-radius: 2px;
    border-top: 2px solid #00256c;
  }
  &:hover {
    border: 1px solid #118fe4;
    background-color: pink;
    cursor: pointer;
  }
`;

const FareBox = styled.div`
  padding: 48px 10px 20px;
`;

const SeatsType = styled.span`
  display: inline-block;
  width: 100%;
  margin: 0 2px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const FlightFare = styled.span`
  font-size: 16px;
  line-height: 1.8;
`;

const Fare = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
`;

const SeatAvailability = styled.span`
  position: relative;
  width: 100%;
  display: inline-block;
  color: #de001b;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`;
