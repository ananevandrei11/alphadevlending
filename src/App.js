import React from 'react';
import './App.scss';
import FooterContainer from './Components/Footer/FooterContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="page">
      <HeaderContainer />
        <Home />
      <FooterContainer />
    </div>
  );
}

export default App;
