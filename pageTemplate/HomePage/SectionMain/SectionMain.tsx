import * as React from 'react';
// @ts-ignore
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import SectionMainCatalogFormat from "./SectionMainCatalogFormat";
import Col from '../../../components/Col/Col';
import Row from "../../../components/Row/Row";
import Container from '../../../components/Container/Container';
import {Project, ViewportSizeEnum} from "../../../types/types";
import SectionMainTitle from './SectionMainTitle';
import {ProjectsMock} from "../../../mock";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import SectionMainBg from './SectionMainBG';
import SectionMainWatchOnline from './SectionMainWatchOnline';

interface ISectionMainProps {
  [prop: string]: any
}

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: false,
  arrows: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};
const SectionMain: React.FC<ISectionMainProps> = () => {


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
        <SectionMainTitle/>
      </Col>

      <div className="section-main_bottom">

        <Slider
          initialSlide={currentSlide}
          afterChange={(index: any) => {
            if (index < ProjectsMock.length) {
              setNewSlideIndex(index);
            }
          }}
          {...settings}>
          <Col className={'section-main_bottom-left'}>
            <SectionMainTitle/>
            <SectionMainWatchOnline/>
          </Col>
          {
            ProjectsMock.map((item: Project, index: number) =>
              <Col
                className={'section-main_slide-project'}
              >
                <ProjectCard key={index} withInfo={false} {...item}/>
              </Col>
            )
          }
        </Slider>

      </div>
      <Col md={'none'} lg={'none'} sm={'none'} pl={24} pr={24}>
        <SectionMainWatchOnline/>
      </Col>
    </div>
  );
};

export default SectionMain;
