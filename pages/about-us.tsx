import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import AwardsList from '../pageTemplate/AboutUs/AwardsList';
import AboutDevelop from '../pageTemplate/AboutUs/AboutDevelop';
import AboutDescription from "../pageTemplate/AboutUs/AboutDescription";
import {useTranslation} from "../libs/i18n";

interface IAboutUsProps {
  [prop: string]: any
}

const AboutUs: React.FC<IAboutUsProps> = () => {
  const {t} = useTranslation('nav');
  return (
    <div>
      <LayoutTitleWithContent
        titleStyle={{
          mb: 32,
        }}
        title={t('nav-about_us')}
      >

        <AboutDescription/>

        <AboutDevelop/>


      </LayoutTitleWithContent>
      <LayoutTitleWithContent
        titleStyle={{
          mb: 32,
        }}
        titleAs={'h2'}
        titleId={'awards'}
        title={t('nav-awards')}
      >
        <AwardsList/>
      </LayoutTitleWithContent>
    </div>
  );
};

export default AboutUs;
