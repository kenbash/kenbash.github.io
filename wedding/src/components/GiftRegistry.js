import React, { useEffect, useRef } from 'react';

function GiftRegistry(props) {
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

  useEffect(() => {
    const source = document.getElementById('zola-wjs');
    if (source) source.parentElement.removeChild(source);

    const a = document.getElementsByTagName('script')[0];
    const s = document.createElement('script');
    s.id = 'zola-wjs';
    s.async = true;
    s.src = 'https://widget.zola.com/js/widget.js';
    a.parentNode.insertBefore(s, a);
  }, []);

  return (
    <div className="gift-registry">
      <div className="title">
        <h1>Gift Registry</h1>
      </div>
      <div className="card" ref={contentRef} style={{ textAlign: 'center' }}>
        <div className="sub-title">
          <p>Your presence is present enough!</p>
          <p className="sub">but if you insist...</p>
        </div>
        <a
          className="zola-registry-embed"
          href="https://www.zola.com/registry/alyssaandkenny2023"
          data-registry-key="alyssaandkenny2023"
        >
          Our Wedding Registry
        </a>
      </div>
    </div>
  );
}

export default GiftRegistry;
