import * as React from 'react';
import Link from "next/link";
// @ts-ignore
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import Col from '../../../components/Col/Col';
import Row from "../../../components/Row/Row";
import CustomCursor from '../../../components/CustomCursor/CustomCursor';
import Container from '../../../components/Container/Container';
import {Project, ViewportSizeEnum} from "../../../types/types";
import SectionMainTitle from './SectionMainTitle';
import {ProjectsMock} from "../../../mock";
import SectionMainCatalogFormat from "./SectionMainCatalogFormat";
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
  const [disabled, setDisabledEvent] = React.useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {

    if (typeof window !== undefined) {
      let isDown: boolean = false;
      let isMoved: boolean = false;
      // @ts-ignore
      ref.current.addEventListener('mousemove', () => {
        if (isDown) {
          setDisabledEvent(true);
          isMoved = true;
        }
      });
      // @ts-ignore
      ref.current.addEventListener('mousedown', () => {
        isDown = true;
      });
      // @ts-ignore
      ref.current.addEventListener('mouseup', (e) => {
        if (isMoved && isDown || isDown) {
          setDisabledEvent(false)
          isDown = false;
          isMoved = false;
        }
      });
    }

  }, []);


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
      <CustomCursor>

        <div ref={ref} className="section-main_bottom">

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
                  <Link href={`/project/slug`}>
                    <ProjectCard
                      disabled={disabled}
                      href={`/project/slug`} key={index} withInfo={false} {...item}/>
                  </Link>
                </Col>
              )
            }
          </Slider>

        </div>
        <Col md={'none'} lg={'none'} sm={'none'} pl={24} pr={24}>
          <SectionMainWatchOnline/>
        </Col>
      </CustomCursor>
    </div>
  );
};

export default SectionMain;
