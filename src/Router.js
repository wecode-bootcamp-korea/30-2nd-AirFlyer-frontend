import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import FlightsList from 'pages/FlightsList/FlightsList';
import MyPage from 'pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
