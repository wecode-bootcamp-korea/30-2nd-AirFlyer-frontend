import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout';
import TicketInfo from './PdfModal';
import Modal from 'components/Modal/Modal';
import { open } from 'redux/isModalOpen';
import { update } from 'redux/modalInfo';
import { getTicketList } from 'hooks/hooks';

function MyPage() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(store => store.isModalOpen.isModalOpen);
  const modalInfo = useSelector(store => store.modalInfo);
  const [ticketList, setTicketList] = useState([]);

  const openModal = () => {
    dispatch(open());
  };

  const updateModalInfo = obj => {
    dispatch(update(obj));
  };

  const handleModalButtonClick = (key, title) => {
    openModal();
    updateModalInfo({ [key]: true, title, currentModalInfo: key });
  };

  const handleLoad = async () => {
    const { data } = await getTicketList();
    setTicketList(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const MAPPING_OBJ = {
    ticket: <TicketInfo />,
  };

  return (
    <Container>
      <WrapperLayout>
        <Title>예약 목록</Title>
        {ticketList.length !== 0 ? (
          ticketList.map(ticket => {
            const { reservation_id, seat, total_price, flight_schedule } =
              ticket;

            return (
              <TicketContainer key={ticket.reservation_id}>
                <InfomationBox>
                  <ETicketBox>
                    <ETicketButton
                      onClick={() => {
                        handleModalButtonClick('ticket', 'e-ticket 리스트');
                      }}
                    >
                      e-ticket
                    </ETicketButton>
                  </ETicketBox>
                  <Itinerary>
                    <LocationBox>
                      <Location>
                        <Code>{flight_schedule.departure_planet_code}</Code>
                        <Name>{flight_schedule.departure_planet_name}</Name>
                      </Location>
                      <Line />
                      <Location>
                        <Code>{flight_schedule.arrival_planet_code}</Code>
                        <Name>{flight_schedule.arrival_planet_name}</Name>
                      </Location>
                    </LocationBox>
                    <DateBox>
                      {flight_schedule.departure_datetime} (
                      {flight_schedule.duration}h) {seat.seat_type}{' '}
                      {seat.seat_number}석
                    </DateBox>
                  </Itinerary>
                </InfomationBox>
                <CheckInBox>
                  <State>예약 완료</State>
                  <Number>예약번호 {reservation_id}</Number>
                  <p>결제금액 : {total_price.toLocaleString()}원</p>
                </CheckInBox>
              </TicketContainer>
            );
          })
        ) : (
          <NoItemContainer>예약 목록이 없습니다.</NoItemContainer>
        )}
      </WrapperLayout>
      {isModalOpen && (
        <Modal title={modalInfo.title}>
          {MAPPING_OBJ[modalInfo.currentModalInfo]}
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  margin-bottom: 60px;
  color: ${p => p.theme.fontColorDarkblue};
  font-weight: 700;
  font-size: 28px;
`;

const TicketContainer = styled.div`
  display: flex;
  border: 1px solid ${p => p.theme.borderColorGray};
  background-color: #fcfcfc;
  margin-bottom: 50px;
`;

const InfomationBox = styled.div`
  display: flex;
  flex: 7;
  border-top: 5px solid ${p => p.theme.borderColorSkyblue};
`;

const ETicketBox = styled.div`
  flex: 1;
  position: relative;
  padding: 10px;
`;

const ETicketButton = styled.button`
  position: absolute;
  padding: 5px 20px;
  background: ${p => p.theme.backgroundColorDarkblue};
  border: 1px solid ${p => p.theme.fontColorDarkblue};
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Itinerary = styled.div`
  flex: 7;
  padding: 40px;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Location = styled.div`
  width: 65px;
  margin: 0 140px;
  background-color: white;
  border: none;
  text-align: center;
`;

const Code = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 16px;
`;

const Line = styled.div`
  width: 1px;
  height: 50px;
  background-color: black;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const CheckInBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-between;
  padding: 40px;
  border-top: 5px solid ${p => p.theme.borderColorDarkblue};
  font-size: 16px;
`;

const State = styled.h2`
  color: #0364de;
  font-weight: 700;
`;

const Number = styled.h2`
  font-size: 16px;
`;

const NoItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  border-top: 1px solid ${p => p.theme.borderColorGray};
  border-bottom: 1px solid ${p => p.theme.borderColorGray};
  font-size: 20px;
`;

export default MyPage;
