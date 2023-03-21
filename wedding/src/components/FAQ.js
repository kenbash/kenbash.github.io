import React, { useEffect, useRef, useState } from 'react';
import './FAQ.css'

const QUESTIONS = [
  'Is parking available at the venue?',
  'What is the dress code?',
  'Can I bring my children?',
  'Can I bring a guest/date?',
  'Will the wedding be indoors or outdoors?',
  'I have a dietary restriction, can I make a special request?',
  'What if I forget to RSVP?',
];

const ANSWERS = [
  'Yes! Complimentary valet parking is provided at the Edgewood Clubhouse, where the ceremony and reception will take place.',
  <>
    {'We would LOVE to see our family and friends get dressed up for our big day! The dress code is formal, black tie optional. ' +
      'This means no jeans, sneakers, or casual wear. For examples of what to wear, check out these links!'}
    <br />
    <a href="https://www.brides.com/story/wedding-dress-code-explained#toc-formal-or-black-tie-optional">
      Dress Code Explained
    </a>
    <br />
    <a href="https://www.theknot.com/content/wedding-guest-attire-cheat-sheet">Guest Attire Cheat Sheet</a>
  </>,
  "We love your little ones! However, we've decided to keep our wedding and reception an adults-only event unless otherwise " +
    'specified on your invitation. We encourage you to use this as a night to relax, socialize, and dance! Thank you for your understanding!',
  'If your guest name is listed on your invite when you RSVP, then yes! Your invitation will be made out to "Your Name & Guest" ' +
    'if a plus one has been given to you. Due to limited space we can only allow the people named on your invitation, so we ask ' +
    'that you do not bring a guest + we want to keep the wedding as an intimate event with close friends and family! Thank you for your understanding!',
  'The ceremony will take place outside and the reception will be inside. During cocktail hour, there will be tables outside ' +
    'for you to enjoy as well. In the case of bad weather, the entire event will be inside.',
  'Yes! Please indicate any dietary restrictions when you RSVP and select your meal option.',
  'If you do not RSVP you will unfortunately not be able to attend the wedding. If you were to show up without RSVPing, ' +
  'there will be no seats for your meal. Make sure you RSVP before the deadline! Thank you!',
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
