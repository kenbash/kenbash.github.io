import React from 'react';
import './App.css';
import EventInfo from './components/EventInfo';
import FAQ from './components/FAQ';
import GiftRegistry from './components/GiftRegistry';
import RSVP from './components/RSVP';
import Travel from './components/Travel';

function App() {
  const [nav, setNav] = React.useState(0);
  
  const renderContent = (n) => {
    switch (n) {
      case 1:
        return <EventInfo />;
      case 2:
        return <RSVP />;
      case 3:
        return <Travel />;
      case 4:
        return <GiftRegistry />;
      case 5:
        return <FAQ />;
      default:
        return null;
    }
  };

  // document.body.parentElement.classList.add('cover');

  // animate links, names

  return (
    <div className="app-container">
      <header className="header">
        <div className="title">
          <h1>Alyssa + Kenny</h1>
        </div>
        <div className="nav">
          <button className="nav-link" onClick={() => setNav(1)}>Details</button>
          <button className="nav-link" onClick={() => setNav(2)}>RSVP</button>
          <button className="nav-link" onClick={() => setNav(3)}>Travel</button>
          <button className="nav-link" onClick={() => setNav(4)}>Registry</button>
          <button className="nav-link" onClick={() => setNav(5)}>FAQ</button>
        </div>
      </header>
      <main>
        {renderContent(nav)}
        {nav > 0 && <div className="green-layer" />}
      </main>
      <footer>
        <span>09/01/2023</span>
        <span/>
        <span>
          <a className="venue-link" href="https://edgewoodtahoe.com/">Edgewood Tahoe, NV</a>
        </span>
      </footer>
    </div>
  );
}

// const TITLE_TEXT = Math.random() > 0.5 ? 'Alyssa + Kenny' : 'Kenny + Alyssa';

export default App;
