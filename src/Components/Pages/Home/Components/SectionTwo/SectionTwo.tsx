import React, { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import { useTranslation } from 'react-i18next';
import "./sectionTwo.scss"

const SectionTwo: React.FC = () => {
  const { t } = useTranslation();
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.two',
  //       start: '40% 50%',
  //       end: '51% 50%',
  //       markers:true,
  //       onEnter: () => tl.timeScale(1).restart(),
  //       onLeave: () => tl.timeScale(10).reverse(0),
  //       onEnterBack: () => tl.timeScale(1).restart(),
  //       onLeaveBack: () => tl.timeScale(10).reverse(0),
  //     },
  //   });
  //   tl.from('.two-text', {
  //     x: '-100%',
  //     opacity: 0,
  //     duration: 1.2,
  //     ease: Power3.easeOut,
  //   });
  // });
  // đừng để nó bị trừng class,sẽ bị conflict
  return (
    <div className="two" >
      <div className="two-container">
        <h4 className="two-text secondpage-content" dangerouslySetInnerHTML={{ __html: t('s2-text') }} />
      </div>
    </div>
  );
};

export default SectionTwo;
