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
        <p style={{ textAlign: 'center' }}>RSVP not available yet. Check back when you've received your invitation!</p>
      </div>
    </div>
  );
}

export default RSVP;
