import React, { useEffect, useRef, useState } from 'react';
import './FAQ.css'

const QUESTIONS = [
  'Is parking available at the venue?',
  'What is the dress code?',
  'Can I bring a plus one?',
  'I have a dietary restriction, can I make a special request?',
  'What is the weather like in Tahoe in August?'
];

const ANSWERS = [
  'Yes! Complimentary valet parking is provided at the Edgewood Clubhouse, where the ceremony and reception will take place.',
  'We ask that everyone in attendance wear formal attire, black tie optional.',
  'Unless otherwise stated on your invitation, no additional guests will be permitted.',
  'Yes! Please indicate any dietary restrictions when you RSVP and select your meal option.',
  'Average daily temperatures are in the high 70s to low 80s. In the evening, those ' +
    'temperatures can dip into the 40s. We recommend bringing a light jacket or sweater for ' +
    'the cooler evening temperatures. The ceremony will be outside and the reception will be indoors.',
];

const FAQ = (props) => {
  const { setOpacityBg } = props;
  const contentRef = useRef(null);
  const [qIdx, setQIdx] = useState(0);

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
    <div className="faq">
      <div className="title">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="card" ref={contentRef}>
        <div className="qna-container">
          <div className="questions">
            {QUESTIONS.map((question, idx) => (
              <button key={idx} className={`question ${qIdx === idx ? 'selected' : ''}`} onClick={() => setQIdx(idx)}>
                {question}
              </button>
            ))}
          </div>
          <div className="answer-box">{<p>{ANSWERS[qIdx]}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
