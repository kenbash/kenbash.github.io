import React, { useEffect, useRef, useState } from 'react';
import './Travel.css';

function Travel(props) {
  const { setOpacityBg } = props;
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  const observerCb = (entries) => {
    if (entries[0].isIntersecting) {
      setOpacityBg(1);
      setShowContent(true);
    }
    else {
      setOpacityBg(0.5);
      setShowContent(false);
    }
  };

  useEffect(() => {
    const { current } = contentRef;
    const observer = new IntersectionObserver(observerCb, { root: null, rootMargin: '-132px', threshold: 0 });
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentRef]);
  
  return (
    <div className="travel">
      <div className="title">
        <h1>Travel</h1>
      </div>
      <div className="card" ref={contentRef}>
        <h2>Getting there</h2>
        <div className="travel-section">
          <div className={`travel-card card-border card-1${showContent ? ' grow-in' : ''}`}>
            <h3>To Tahoe</h3>
            <p>
              If you're looking to fly, the closest airport is in Reno. From there, you can rent a car or take the{' '}
              <a href="https://southtahoeairporter.com/">South Tahoe Airporter</a> shuttle.
            </p>
          </div>
          <div className={`travel-card card-2${showContent ? ' grow-in' : ''}`}>
            <h3>To Edgewood</h3>
            <p>
              When arriving, follow signs for The Clubhouse. We recommend driving or rideshare. Complimentary valet
              parking will be provided.
            </p>
          </div>
        </div>
        <h2 className="section-spacer">Where to stay</h2>
        <div className="travel-section">
          <div className={`travel-card card-border card-3${showContent ? ' grow-in' : ''}`}>
            <h3>At Edgewood</h3>
            <p>
              If you are interested in staying at The Lodge at Edgewood, reach out to us for a 15% off discount code!
            </p>
          </div>
          <div className={`travel-card card-border card-4${showContent ? ' grow-in' : ''}`}>
            <h3>Other Hotels</h3>
            <p>Stay wherever you feel comfortable! Here are a few hotel options:</p>
            <a href="https://www.tahoeresorthotel.com/">Lake Tahoe Resort Hotel</a>
            <br />
            <a href="https://www.stationhouseinn.com/">Station House Inn</a>
            <br />
            <a href="https://thebluelakeinn.com/">The Bluelake Inn</a>
          </div>
          <div className={`travel-card card-5${showContent ? ' grow-in' : ''}`}>
            <h3>AirBnB / VRBO</h3>
            <p>Look for anything in the South Lake Tahoe or Stateline area. Plenty of beautiful choices available!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
