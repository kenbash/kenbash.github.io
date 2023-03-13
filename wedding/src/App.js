import React, { useEffect, useState } from 'react';
import './App.css';
import EventInfo from './components/EventInfo';
import FAQ from './components/FAQ';
import GiftRegistry from './components/GiftRegistry';
import RSVP from './components/RSVP';
import Travel from './components/Travel';

function App() {
  const [nav, setNav] = useState(0);
  const [opacityBg, setOpacityBg] = useState(0);

  useEffect(() => window.scrollTo(0, 0), [nav]);

  const navigate = (i) => {
    if (nav === i) {
      window.scrollTo(0, 0);
    }
    setOpacityBg(i === 0 ? 0 : 0.5);
    setNav(i);
  }

  const renderContent = (n) => {
    switch (n) {
      case 1:
        return <EventInfo setOpacityBg={setOpacityBg} />;
      case 2:
        return <Travel setOpacityBg={setOpacityBg} />;
      case 3:
        return <GiftRegistry setOpacityBg={setOpacityBg} />;
      case 4:
        return <FAQ setOpacityBg={setOpacityBg} />;
      case 5:
        return <RSVP setOpacityBg={setOpacityBg} />;
      default:
        return (<>
          <h1 className="venue">Edgewood Tahoe</h1>
          <h1 className="date">09-01-23</h1>
        </>);
    }
  };

  return (
    <div className={`app-container ${opacityBg === 1.0 ? 'bg-opaque' : ''}`}>
      <header>
        <div className="nav">
          <button className="nav-link" onClick={() => navigate(1)}>
            DETAILS
          </button>
          <button className="nav-link" onClick={() => navigate(2)}>
            TRAVEL
          </button>
          <h1 onClick={() => navigate(0)}>Alyssa + Kenny</h1>
          <button className="nav-link" onClick={() => navigate(3)}>
            REGISTRY
          </button>
          <button className="nav-link" onClick={() => navigate(4)}>
            FAQ
          </button>
        </div>
      </header>
      <main>
        {renderContent(nav)}
        <div className="bg-layer" style={{ opacity: opacityBg }} />
      </main>
      <footer>
        {nav !== 5 && <button className="rsvp-btn" onClick={() => navigate(5)}>RSVP</button>}
      </footer>
    </div>
  );
}

// const TITLE_TEXT = Math.random() > 0.5 ? 'Alyssa + Kenny' : 'Kenny + Alyssa';

export default App;
