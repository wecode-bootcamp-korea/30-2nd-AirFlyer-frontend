import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import FlightsList from 'pages/FlightsList/FlightsList';
import MyPage from 'pages/MyPage/MyPage';
import TravelerInfo from './pages/TravelerInfo/TravelerInfo';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/flights" element={<FlightsList />} />
        <Route path="/users/mypage" element={<MyPage />} />
        <Route path="/travelerinfo" element={<TravelerInfo />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;

// react router dom 에서 라우터 안에서의 특정 컴포넌트 보여지는 부분을 감싸는 라우팅 컴포넌트 찾아보기
// Redirects (Auth) 비슷 한 맥락이니까 확인
