import React, { useEffect, useRef, useState } from 'react';
import './EventInfo.css';

function EventInfo(props) {
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
    <div className="event-details">
      <div className="title">
        <h1>Wedding Details</h1>
      </div>
      <div className="card" ref={contentRef}>
        <div className="detail-section">
          <div className={`detail-card card-1${showContent ? ' grow-in' : ''}`}>
            <h1>Ceremony</h1>
            <h3>09 01 23</h3>
            <p>4:30 in the afternoon</p>
            <p>Edgewood Tahoe - North Lawn</p>
            <p>Stateline, Nevada</p>
          </div>
          <div className={`detail-card card-2${showContent ? ' grow-in' : ''}`}>
            <h1>Reception</h1>
            <h3>09 01 23</h3>
            <p>Immediately after the ceremony</p>
            <p>Edgewood Tahoe - Clubhouse</p>
            <p>Dinner, Drinks, and Dancing!</p>
          </div>
        </div>
        <div className="detail-location">
          <iframe
            title="Edgewood Tahoe location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.133859461303!2d-119.9511721843823!3d38.9666113504658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80999a9a74643ee3%3A0x8982b322198f6521!2sEdgewood%20Tahoe!5e0!3m2!1sen!2sus!4v1678581809673!5m2!1sen!2sus"
            width="500"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
