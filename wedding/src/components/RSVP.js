import React, { useEffect, useRef } from 'react';

function RSVP(props) {
  const { setOpacityBg } = props;
  const contentRef = useRef(null);

  const observerCb = (entries) => {
    if (entries[0].isIntersecting) setOpacityBg(1);
    else setOpacityBg(0.5);
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
    <div className="gift-registry">
      <div className="title">
        <h1>RSVP</h1>
      </div>
      <div className="card" ref={contentRef}>
        <iframe
          title="RSVP Form"
          src="https://alyssasaidyes.rsvpify.com?embed=1"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '800px',
            overflow: 'hidden',
            border: 'none'
          }}
        />
      </div>
    </div>
  );
}

export default RSVP;
