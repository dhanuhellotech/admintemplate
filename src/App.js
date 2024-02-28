import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/pages/Login';

import ProtectedRoutes from './components/ProtectedRoutes.js';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="App">

        <Routes>
          <Route path="/*" element={isLoggedIn ? <ProtectedRoutes /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
      
        </Routes>
   
    </div>
  );
}

export default App;
