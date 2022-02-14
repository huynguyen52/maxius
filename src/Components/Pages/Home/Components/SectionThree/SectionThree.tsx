import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import './sectionThree.scss';
const data = [
  {
    name: 'Product',
  },
  {
    name: 'Technology',
  },
  {
    name: 'Application',
  },
  {
    name: 'Block Chain',
  },
];

const SectionThree: React.FC = () => {
  // useEffect(() => {
  //   // on enter
  //   const tl = gsap.timeline({
  //     paused: true,
  //     scrollTrigger: {
  //       trigger: '.three',
  //       start: '49% 50%',
  //       end: '51% 50%',
  //       // markers:true,
  //       onEnter: () => tl.timeScale(1).restart(),
  //       onEnterBack: () => tl.timeScale(1).restart(),
  //       onLeave: () => tl.timeScale(7).reverse(0),
  //       onLeaveBack: () => tl.timeScale(7).reverse(0),

  //     },
  //   });
  //   tl.from(
  //     '.three-item-wrapper-1',
  //     { y: -700, opacity: 0, duration: 0.7 },
  //     0.2
  //   )
  //     .from(
  //       '.three-item-wrapper-2',
  //       { y: 700, opacity: 0, duration: 0.7 },
  //       '-=0.3'
  //     )
  //     .from(
  //       '.three-item-wrapper-3',
  //       { y: -700, opacity: 0, duration: 0.7 },
  //       '-=0.3'
  //     )
  //     .from(
  //       '.three-item-wrapper-4',
  //       { y: 700, opacity: 0, duration: 0.7 },
  //       '-=0.3'
  //     );

  //   // on leave
  //   const tl2 = gsap.timeline({
  //     paused: true,
  //     scrollTrigger: {
  //       trigger: '.three',
  //       start: '49% center',
  //       end: '51% center',
  //       onEnter: () => tl2.pause(),
  //       onLeave: () => tl2.restart(),
  //       onLeaveBack: () => tl2.restart(),
  //     },
  //   });
  //   tl2
  //     .to('.three-item-wrapper-1', { y: -700, opacity: 0, duration: 0.5 })
  //     .to('.three-item-wrapper-2', { y: 700, opacity: 0, duration: 0.5 }, 0)
  //     .to('.three-item-wrapper-3', { y: -700, opacity: 0, duration: 0.5 }, 0)
  //     .to('.three-item-wrapper-4', { y: 700, opacity: 0, duration: 0.5 }, 0);
  // }, []);

  const { t } = useTranslation();
  return (
    <div className="three" >
      <div className="three-container">
        {data.map((item, idx) => (
          <div key={idx} className="three-item">
            <div className={`three-item-wrapper three-item-wrapper-${idx + 1}`}>
              <h3 className={`three-item-title three-item-title-${idx + 1}`}>
                {item.name}
              </h3>
              <p className={`three-item-desc three-item-desc-${idx + 1}`}>
                {t(`intrduceData.${idx}.content`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
