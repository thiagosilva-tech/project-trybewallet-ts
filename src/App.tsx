import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Header /> }>
          <Route path="/carteira" element={ <Wallet /> } />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
