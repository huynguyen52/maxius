import { gsap, Power3 } from 'gsap';

const AfterLoad = (origin: any, destination: any, direction: any) => {

  const tl = gsap.timeline({});
  console.log("afterLoad", destination.index);

  switch (destination.index) {
    case 1:
      gsap.from(".two-container", {
        autoAlpha: 0,
      });
      gsap.to(".two-text", {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        delay: .1
      });
      break;



    case 2:

      gsap.to(
        '.three-item-wrapper-1',
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.to(
        '.three-item-wrapper-2',
        { y: 0, opacity: 1, duration: 0.7, delay: 0.5 }
      );
      gsap.to(
        '.three-item-wrapper-3',
        { y: -0, opacity: 1, duration: 0.7, delay: 0.8 }
      )
      gsap.to(
        '.three-item-wrapper-4',
        { y: 0, opacity: 1, duration: 0.7, delay: 1.1 }
      );

      break;

    case 3:
      tl.to("#fourthPage-title", {
        y: 0,
        duration: 0.8,
        opacity: 1,
        ease: Power3.easeOut,
      }).to(
        "#fourthPage-container",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          ease: Power3.easeOut,
        },
        "-=0.3"
      );


      break;


    case 4:
      tl.to(".five-link-title.five-link-title--1", {
        opacity: 1,
        duration: 0.8,
        x: 0,
        ease: Power3.easeOut,
      })
        .to(
          ".five-link-title.five-link-title--2",
          {
            opacity: 1,
            duration: 0.8,
            x: 0,
          },
          "-=0.4"
        )
        .to(
          ".five-link-email",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.5"
        )
        .to(
          ".five-link-text",
          {
            opacity: 1,
            duration: 0.8,
            x: 0,
            ease: Power3.easeOut,
          },
          "-=0.2"
        );


      break;

    default:
      break;
  }

}

export default AfterLoad