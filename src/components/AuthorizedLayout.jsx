// AuthorizedLayout.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AuthorizedLayout = () => {
  const navigate = useNavigate();
  const [selectedBot, setSelectedBot] = useState(null);
  const [isBotCreated, setIsBotCreated] = useState(false);

  const handleBotSelect = (botName) => {
    setSelectedBot(botName);
    setIsBotCreated(true);
    navigate('/app/overview');
  };

  return (
    <div className="container-fluid">
      <Navbar handleEditClick={() => {}} />
      <div className="row">
        <div className="col-md-2">
          <Sidebar onBotSelect={handleBotSelect} />
        </div>
        <div className="col-md-10">
          <Outlet context={{ selectedBot, isBotCreated }} />

        </div>
      </div>
    </div>
  );
};

export default AuthorizedLayout;