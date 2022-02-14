import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { storyData } from "./data/story.data.js";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import "./sectionFour.scss"

gsap.registerPlugin(ScrollTrigger);

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const SectionFour: React.FC = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#fourthPage",
  //       start: "49% center",
  //       end: "51% center",
  //       // markers:true,
  //       onEnter: () => tl.restart(),
  //       onLeave: () => tl.reverse(0).time(0.6),
  //       onEnterBack: () => tl.restart(),
  //       onLeaveBack: () => tl.reverse(0).time(0.6),
  //     },
  //   });
  //   tl.from("#fourthPage-title", {
  //     y: -100,
  //     duration: 0.8,
  //     opacity: 0,
  //     ease: Power3.easeOut,
  //   }).from(
  //     "#fourthPage-container",
  //     {
  //       x: "-100%",
  //       duration: 1,
  //       opacity: 0,
  //       ease: Power3.easeOut,
  //     },
  //     "-=0.3"
  //   );
  // }, []);

  return (
    <div className="four" >
      <div className="story">
        <div className="container">
          <div className="boxStory">
            <h1 className="title" id="fourthPage-title">
              STORY
            </h1>
            <div className="boxContent" id="fourthPage-container">
              <Slider {...settings}>
                {storyData.map((item, idx) => (
                  <div key={idx} className="boxContent_item">
                    <h2 className="year">{item.caption}</h2>
                    <div className="itemList">
                      {item.listItem.map((list, idxs) => (
                        <div className="box" key={idxs}>
                          {/* <h4>
                            {t(`storyData.${idx}.listItem.${idxs}.nameProduct`)}
                          </h4> */}
                          <h4>
                          {t(
                              `storyData.${idx}.listItem.${idxs}.name`
                            )}</h4>
                          <p>
                          {t(
                              `storyData.${idx}.listItem.${idxs}.desc`
                            )}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
