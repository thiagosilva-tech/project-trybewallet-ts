import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </main>
  );
}

export default App;
