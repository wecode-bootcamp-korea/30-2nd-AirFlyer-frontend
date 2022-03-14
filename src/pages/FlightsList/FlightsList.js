import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout.js';
import FlightWidgetFix from './FlightWidgetFix/FlightWidgetFix';
import TotalPriceBar from './TotalPriceBar/TotalPriceBar';
import FlightCard from './FlgithCard/FlightCard';
import { useDispatch, useSelector } from 'react-redux';
import { linkPages } from './flightsListData';
import { updatePrice } from 'redux/totalFare';
import { setTicket } from 'redux/ticketInfo';

function FlightList() {
  const BASE_URL = 'ec2-3-38-247-89.ap-northeast-2.compute.amazonaws.com:8000';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const depLocation = useSelector(store => store.location.depLocation);
  const arrLocation = useSelector(store => store.location.arrLocation);
  const ticketInfo = useSelector(store => store.ticketInfo);
  const date = useSelector(store => store.date);
  const selectedDay = date.state[0].startDate;
  const [flightsList, setFlightsList] = useState([]);
  const [selctedTicket, setSelectedTicket] = useState([]);
  const [newTicketArray, setNewTicketArray] = useState([]);
  const [queryData, setQueryData] = useState({
    query_for_date: '',
    query_for_sort: '',
  });

  // const [seatPrice, setSeatPrice] = useState(10000);
  // const [seatGrade, setSeatGrade] = useState('이코노미');
  // let newTicketArray = [ticketInfo.state[0]];
  // const selectedDay = Number(date.state[0].startDate.getDate());
  // const dayOptions = [date.state[0].startDate];

  const dayOptions = [
    moment(selectedDay),
    moment(selectedDay).add(1, 'days'),
    moment(selectedDay).add(2, 'days'),
    moment(selectedDay).add(3, 'days'),
    moment(selectedDay).add(4, 'days'),
    moment(selectedDay).add(5, 'days'),
    moment(selectedDay).add(6, 'days'),
  ];

  // 받아온 날짜 전역 스테이트로 첫 화면 렌더링
  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(res => setFlightsList(res));
  }, []);

  // useEffect(() => {
  //   console.log('location.search', location.search);
  //   fetch(`${BASE_URL}/flights${location.search}`)
  //     .then(res => res.json())
  //     .then(res => setFlightsList(res));
  // }, [location.search]);

  // 두개 실행하는 함수 분리
  // 단수 평가, 복수로 하는 법 점검해보기
  useEffect(() => {
    {
      newTicketArray.length > 0 && getTicket({ newTicketArray });
    }
  }, [newTicketArray]);

  //TODO: 빈배열이 아닐때 렌더링 하게끔 해놓는다. 즉 빈배열은 truthy 니까 ![]

  function selectTicket(target, seatType, seatPrice) {
    setSelectedTicket(
      ...flightsList.filter(
        flight =>
          flight.flight_schedule_info.flight_schedule_id ===
          target.flight_schedule_id
      )
    );
    changePrice(seatPrice);
    makeArrayToGetTicket(target, seatType);
  }

  function makeArrayToGetTicket(ticket, seatType) {
    setNewTicketArray([
      {
        flight_schedule_id: ticket.flight_schedule_id,
        departure_datetime: ticket.departure_datetime,
        arrival_datetime: ticket.arrival_datetime,
        duration: ticket.duration,
        seat_type: seatType,
        spaceship_name: ticket.spaceship_name,
      },
    ]);
  }

  const getTicket = array => {
    dispatch(setTicket(array));
    // console.log('ticketInfo', ticketInfo);
  };

  const changePrice = e => {
    dispatch(updatePrice(e));
  };

  const updateDate = e => {
    const newQuery = queryData;
    newQuery.query_for_date = e;
    updateQuery(newQuery);
  };

  const updateSort = e => {
    // console.log(e.target.value);
    const newQuery = queryData;
    newQuery.query_for_sort = e.target.value;
    updateQuery(newQuery);
  };

  const updateQuery = newQuery => {
    navigate(
      `?departure_date=${newQuery.query_for_date}&${newQuery.query_for_sort}`
    );
  };

  return (
    <>
      <ContainerForPage>
        <FlightWidgetFix />
        <WrapperLayout>
          <ContainerForContents>
            <ReturningToPagesBox>
              {linkPages.map(linkPage => (
                <PageLink to={linkPage.path} key={linkPage.id}>
                  <NumberBullet className="currentPage">
                    {linkPage.id}
                  </NumberBullet>
                  <PageName>{linkPage.name}</PageName>
                </PageLink>
              ))}
            </ReturningToPagesBox>
            <Itinerarybox>
              <Oneway>가는 편</Oneway>
              <FromPlanet>
                <LightCode>{depLocation.planet_code}</LightCode>
                <NameOfPlanet>{depLocation.planet_name}</NameOfPlanet>
              </FromPlanet>
              <ToPlanet>
                <LightCode>{arrLocation.planet_code}</LightCode>
                <NameOfPlanet>{arrLocation.planet_name}</NameOfPlanet>
              </ToPlanet>
            </Itinerarybox>
            <DatesOptionBox>
              {dayOptions.map((dayOption, index) => (
                <DateOptionButton
                  key={index}
                  onClick={() => {
                    updateDate(dayOption.format('YYYY-MM-DD'));
                  }}
                >
                  <DateSpan>{dayOption.format('DD')}일</DateSpan>
                  <PriceSpan>우주선 티켓 보기</PriceSpan>
                </DateOptionButton>
              ))}
            </DatesOptionBox>
            <SortOptionsBOx>
              <SortSelectBox onChange={updateSort}>
                <option value="sort=departure_time">추천 순</option>
                <option value="sort=dep">출발 시간 순</option>
                <option value="sort=arr">도착 시간 순</option>
                <option value="sort=dur">여행 시간 순</option>
                <option value="sort=min">최저 요금 순</option>
              </SortSelectBox>
              <SortSelectBox>
                <option>모든 경로</option>
              </SortSelectBox>
              <SortSelectBox>
                <option>KRW</option>
              </SortSelectBox>
            </SortOptionsBOx>
            <FlightsTicketsBox>
              <FlightCardWrap>
                {flightsList.length > 0 &&
                  flightsList.map(flight => {
                    return (
                      <ul key={flight.flight_schedule_info.flight_schedule_id}>
                        <FlightCard
                          flight_schedule_info={flight.flight_schedule_info}
                          flight_seat_info={flight.flight_seat_info}
                          selectTicket={selectTicket}
                        />
                      </ul>
                    );
                  })}
              </FlightCardWrap>
            </FlightsTicketsBox>
          </ContainerForContents>
        </WrapperLayout>
      </ContainerForPage>
      <TotalPriceBar selctedTicket={selctedTicket} />
    </>
  );
}

export default FlightList;

// Body
const ContainerForPage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// ContainerForContents
const ContainerForContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: 2341px;
  margin: 0 53px;
  padding: 60px 0 100px 0;
`;

//contents box - Link to pages options

const ReturningToPagesBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 44px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;

const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const NumberBullet = styled.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid #00256c;
  border-radius: 14px;
  color: #00256c;
  font-size: 14px;
  line-height: 1.58;
`;

const PageName = styled.span`
  display: block;
  margin-left: 8px;
  color: #00256c;
  font-size: 16px;
`;

//contents box 2 : Oneway 가는 편 설명
const Itinerarybox = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  margin-bottom: 40px;
  background-color: white;
  font-size: 1.4rem;
`;

const Oneway = styled.h1`
  margin: 0;
  padding: 0;
  padding-right: 20px;
  color: #00256c;
  font-size: 1.6rem;
  font-weight: bold;
`;

const FromPlanet = styled.p`
  color: #00256c;
`;
const LightCode = styled.span`
  margin-right: 15px;
`;

const ToPlanet = styled.p`
  color: #00256c;
  &::before {
    content: '->';
    margin: 0 15px;
  }
`;
const NameOfPlanet = styled.span`
  color: #00256c;
`;

//contents box 3 : Options of dates of flights
const DatesOptionBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
  border: 1px solid darkgray;
`;
const DateOptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;

const DateSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  padding: 15px;
  padding-bottom: 0;
  &.currentDay {
    color: red;
  }
`;

const PriceSpan = styled.span`
  display: flex;
  justify-content: center;
  padding: 12px;
  color: darkgray;
`;

//contents box 4 : sort opiton
const SortOptionsBOx = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 50px 0 20px 0;
`;

const SortSelectBox = styled.select`
  width: 130px;
  height: 40px;
  margin-right: 12px;
  padding: 0 10px;
  border-color: #d9dbe1;
  background: 0 0;
  font-size: 14px;
`;

//contents box 5
const FlightsTicketsBox = styled.div`
  height: 1816px;
  background-color: white;
`;

const FlightCardWrap = styled.div`
  position: relative;
  min-height: 440px;
`;
