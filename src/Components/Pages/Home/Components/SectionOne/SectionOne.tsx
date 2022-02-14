
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./sectionOne.scss"

const SectionOne: React.FC = () => {
  const { t } = useTranslation();

//lag vậy copy q
  return (
    <div className="one">
      <div className="one-container">
        <h1 className="one-title firstpage-tit">MAX I & US</h1>
        <p className="one-text firstpage-detail ">{t('s1-text1')}</p>
        <p className="one-text firstpage-sub">{t('s1-text2')}</p>
      </div>
    </div>
  );
};
//xoá hết id đi nhé

export default SectionOne;
