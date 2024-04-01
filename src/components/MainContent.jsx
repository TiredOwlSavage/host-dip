// MainContent.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OverviewFlow from './OverviewFlow';

const MainContent = ({ contentColor }) => {
  const mainContentStyle = {
    backgroundColor: contentColor,
    minHeight: '100vh', // Используем minHeight для всей высоты экрана
    padding: '60px'
  };

  return (
    <div style={mainContentStyle}>
      <OverviewFlow />
    </div>
  );
};

export default MainContent;