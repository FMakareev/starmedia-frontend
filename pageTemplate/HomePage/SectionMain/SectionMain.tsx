import * as React from 'react';

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Col from '../../../components/Col/Col';
import Row from "../../../components/Row/Row";
import CustomCursor from '../../../components/CustomCursor/CustomCursor';
import Container from '../../../components/Container/Container';
import {MainSection, ViewportSizeEnum} from "../../../types/types";
import SectionMainTitle from './SectionMainTitle';
import {ProjectsMock} from "../../../mock";
import SectionMainCatalogFormat from "./SectionMainCatalogFormat";
import SectionMainBg from './SectionMainBG';
import SectionMainWatchOnline from './SectionMainWatchOnline';
// @ts-ignore
import SectionMainBottom from './SectionMainBottom';
import SectionMainBottomSwiper from './SectionMainBottomSwiper';

interface ISectionMainProps extends MainSection {
  [prop: string]: any
}


const SectionMain: React.FC<ISectionMainProps> = (
  {
    title,
    animatedText
  }
) => {


  const [currentSlide, setNewSlideIndex] = React.useState(0);


  return (
    <div className={'section-main'}>

      <SectionMainBg project={ProjectsMock[currentSlide]}/>

      <Container mb={50}>
        <Row end={ViewportSizeEnum.xs}>
          <Col>
            <SectionMainCatalogFormat/>
          </Col>
        </Row>
      </Container>

      <Col md={'none'} lg={'none'} sm={'none'} pl={24} pr={24} mb={24}>
        <SectionMainTitle
          title={title}
          animatedText={animatedText}
        />
      </Col>
      <CustomCursor>

        <SectionMainBottomSwiper
          currentSlide={currentSlide}
          setNewSlideIndex={setNewSlideIndex}
          title={title}
          animatedText={animatedText}
        />
        {/*<SectionMainBottom*/}
        {/*  currentSlide={currentSlide}*/}
        {/*  setNewSlideIndex={setNewSlideIndex}*/}
        {/*  title={title}*/}
        {/*  animatedText={animatedText}*/}
        {/*/>*/}

        <Col md={'none'} lg={'none'} sm={'none'} pl={24} pr={24}>
          <SectionMainWatchOnline/>
        </Col>
      </CustomCursor>
    </div>
  );
};

export default SectionMain;
