import { gsap, Power3 } from 'gsap';

const cancelSection = (index: number) => {
  switch (index) {
    case 1:
      gsap.to('.firstpage-tit', { visibility: 'hidden' });
      gsap.to('.firstpage-detail', { visibility: 'hidden' });
      gsap.to('.firstpage-sub', { visibility: 'hidden' });
      break;

    case 2:
      gsap.to('.two-text', {
        opacity: 0,
        x: -880,
        duration: 1.5,
        ease: 'power4.out',
      });
      break;

    case 3:
      gsap.to('.three-item-wrapper-1', { opacity: 0, y: -700 });
      gsap.to('.three-item-wrapper-2', { opacity: 0, y: 700 });
      gsap.to('.three-item-wrapper-3', { opacity: 0, y: -700 });
      gsap.to('.three-item-wrapper-4', { opacity: 0, y: 700 });

      break;

    case 4:
      gsap.to('#fourthPage-title', {
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        y: -100,
      });
      gsap.to('#fourthPage-container', {
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        x: '-100%',
      });
      break;

    case 5:
      gsap.to('.five-link-title.five-link-title--1', { opacity: 0, x: 300 });
      gsap.to('.five-link-title.five-link-title--2', { opacity: 0, x: 300 });
      gsap.to('.five-link-email', { opacity: 0, y: -50 });
      gsap.to('.five-link-text', { opacity: 0, x: 200 });

      break;
    default:
      break;
  }
};

const OnLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    // section 1
    case 0:
      //exa,ple

      cancelSection(2);
      gsap.from('.firstpage-tit', {
        autoAlpha: 0,
        y: -980,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.firstpage-detail', {
        autoAlpha: 0,
        x: -280,
        duration: 1,
        ease: 'power4.out',
        delay: 0.7,
      });
      gsap.from('.firstpage-sub', {
        autoAlpha: 0,
        x: -780,
        duration: 1.2,
        ease: 'power4.out',
      });

      break;
    //section 2
    case 1:
      // cancel animation section 1
      cancelSection(1);

      // cancel animation section 3
      cancelSection(3);

      break;

    // section 3
    case 2:
      // cancel animation section 2
      cancelSection(2);
      // cancel animation section 4
      cancelSection(4);

      break;

    // section 4
    case 3:
      // cancel animation section 3
      cancelSection(3);
      // cancel animation section 5
      cancelSection(5);
      break;

    // section 5
    case 4:
      // cancel animation section 4
      cancelSection(4);
      break;

    default:
      break;
  }
};

export default OnLeave;
