import React from 'react';
import './EventInfo.css';

function EventInfo() {
  return (
    <div className="card">
      <div className="details">
        <div className="detail-grid">
          <b>Date:</b>
          <p>September 1st, 2023</p>
          <b>Time:</b>
          <p>4:30 PM - 11:00 PM</p>
          <b>Location:</b>
          <p>Edgewood Tahoe, Stateline NV</p>
          <b>Dress code:</b>
          <p>Formal, Black Tie Optional</p>
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
