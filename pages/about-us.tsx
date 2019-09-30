import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import AwardsList from '../pageTemplate/AboutUs/AwardsList';
import AboutDevelop from '../pageTemplate/AboutUs/AboutDevelop';
import AboutDescription from "../pageTemplate/AboutUs/AboutDescription";

interface IAboutUsProps {
  [prop: string]: any
}

const AboutUs: React.FC<IAboutUsProps> = () => {
  return (
    <div>
      <LayoutTitleWithContent
        titleStyle={{
          mb: 32,
        }}
        title={'О компании'}
      >

        <AboutDescription/>

        <AboutDevelop/>


      </LayoutTitleWithContent>
      <LayoutTitleWithContent
        titleStyle={{
          mb: 32,
        }}
        title={'награды'}
      >
        <AwardsList/>
      </LayoutTitleWithContent>
    </div>
  );
};

export default AboutUs;
