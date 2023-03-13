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

  // useEffect?
  // const registryEmbed =
  //   '<a class="zola-registry-embed" href="https://www.zola.com/registry/alyssaandkenny2023" data-registry-key="alyssaandkenny2023">Our Zola Wedding Registry</a><script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script>';

  return (
    <div className="gift-registry">
      <div className="title">
        <h1>Gift Registry</h1>
      </div>
      <div className="card" ref={contentRef}>
        <p style={{ textAlign: 'center' }}>Coming soon!</p>
      </div>
    </div>
  );
}

export default GiftRegistry;
