import React, { useEffect } from 'react';
import './contact.scss';
import gsap from 'gsap';

const Contact = () => {
  useEffect(() => {
    gsap.from('.slide-right', {
      x: '-50px',
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.3,
      },
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title slide-right">Contact us</h2>
        <div className="contact-main">
          <div className="contact-map ">
            <iframe
              title="looclocation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
              frameBorder="0"
              allowFullScreen
              className="slide-right"
            ></iframe>
          </div>
          <div className="contact-detail slide-right">
            <div className="top slide-right">
              <p>
                서울특별시 강남구 <br /> 도산대로 8길 17-10 1F <br />T 02 543
                4983{' '}
              </p>
            </div>
            <div className="bottom">
              <p className="title slide-right">Work With Us</p>
              <a href="#" className="link slide-right">
                loocreative@playlooc.com
              </a>
              <br />
              <p className="title slide-right">Careers.</p>
              <a href="#" className="link slide-right">
                loocreative@playlooc.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
