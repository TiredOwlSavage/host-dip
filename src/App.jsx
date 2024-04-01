// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import AuthorizedLayout from './components/AuthorizedLayout';
import MainContent from './components/MainContent';
import OverviewFlow from './components/OverviewFlow';
import LoginPage from './landing/LoginPage';
import RegisterPage from './landing/RegisterPage'; 

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="app" element={<AuthorizedLayout />}>
          <Route path="overview" element={<OverviewFlow />} />
        </Route>
      </Routes>
    </>
);
}

export default App;
