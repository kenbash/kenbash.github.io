import React from 'react';
import './FAQ.css'

function FAQ() {
  return (
    <div className="card faq">
      <b>Is parking available at the venue?</b>
      <p className="faq-pad">Yes, complimentary valet parking is provided at the Edgewood Clubhouse.</p>
      <b>What is the dress code?</b>
      <p className="faq-pad">We ask that everyone in attendance wear formal attire, black tie optional.</p>
      <b>Can I bring a plus one?</b>
      <p className="faq-pad">Unless otherwise stated on your invitation, no additional guests will be permitted.</p>
      <b>I have a dietary restriction, can I make a special request?</b>
      <p className="faq-pad">Yes, please indicate any dietary restrictions when you RSVP and select your meal option.</p>
      <b>What is the weather like in Tahoe in August?</b>
      <p>          
        Average daily temperatures are in the high 70s to low 80s.
        In the evening, those temperatures can dip into the 40s.
        We recommend bringing a light jacket or sweater for the cooler evening temperatures.
        The ceremony will be outside and the reception will be indoors.
      </p>
    </div>
  );
}

export default FAQ;
