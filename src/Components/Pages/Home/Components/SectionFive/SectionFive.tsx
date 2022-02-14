import React, { useEffect } from "react";
import gsap, { Power3 } from "gsap";
import "./sectionFive.scss";

const SectionFive: React.FC = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#fifthPage",
  //       start: "49% center",
  //       end: "51% center",
  //       onEnter: () => tl.restart(),
  //       onLeaveBack: () => tl.reverse(0).time(0.2),
  //     },
  //   });

  //   tl.from(".five-link-title.five-link-title--1", {
  //     opacity: 0,
  //     duration: 0.8,
  //     x: 300,
  //     ease: Power3.easeOut,
  //   })
  //     .from(
  //       ".five-link-title.five-link-title--2",
  //       {
  //         opacity: 0,
  //         duration: 0.8,
  //         x: 300,
  //       },
  //       "-=0.4"
  //     )
  //     .from(
  //       ".five-link-email",
  //       {
  //         opacity: 0,
  //         y: -50,
  //         duration: 0.4,
  //       },
  //       "-=0.5"
  //     )
  //     .from(
  //       ".five-link-text",
  //       {
  //         opacity: 0,
  //         duration: 0.8,
  //         x: 200,
  //         ease: Power3.easeOut,
  //       },
  //       "-=0.2"
  //     );
  // }, []);

  return (
    <div className=" five">
      <div className="five-container">
        <div className="five-link">
          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--1">Company.</h3>
            <a className="five-link-email" href="mailto:support@taejin.co.kr">
              <p>support@taejin.co.kr</p>
              <p className="email-icon">✉</p>
            </a>
          </div>

          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--2">Warranty.</h3>
            <a className="five-link-text" href="/">
              Learn more &#62;
            </a>
          </div>

          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--2">
              Technical support.
            </h3>
            <a className="five-link-text" href="/">
              Learn more &#62;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
