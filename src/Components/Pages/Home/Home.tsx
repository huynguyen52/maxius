import React, { useEffect, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionFive from "./Components/SectionFive/SectionFive";
import { useHistory } from 'react-router-dom';

import ReactFullpage from '@fullpage/react-fullpage';
import AfterLoad from "./Components/animation/afterLoad";
import OnLeave from "./Components/animation/onLeave";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Home: React.FC = () => {
  const fullpageOptions = {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fivePage"],
  };
  return (
    <div className="page-home">
      <ReactFullpage
      licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
        {...fullpageOptions}
        navigation
        //fullpage options
        scrollingSpeed={700} /* Options here */
        onLeave={OnLeave}
        afterLoad={AfterLoad}
        normalScrollElements={".itemList"}
        render={() => {          
          return (
            <>
              <div className="section">
                <SectionOne />
              </div>

              <div className="section">
                <SectionTwo />
              </div>

              <div className="section">
                <SectionThree />
              </div>

              <div className="section">
                <SectionFour />
              </div>

              <div className="section">
                <SectionFive />
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default Home;
