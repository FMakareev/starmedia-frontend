import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import {Award} from "../../types/types";
import AwardCard from '../../components/AwardCard/AwardCard';
// @ts-ignore
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";
import Link from 'next/link';

interface IProjectAwardsProps {
  awards: Award[];

  [prop: string]: any
}

const params = {
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 24,
  getSwiper: (swiper: SwiperInstance) => {
    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
};

const ProjectAwards: React.FC<IProjectAwardsProps> = () => {
  const {t} = useTranslation('common');

  return (
    <Col as={'section'} id={'awards'} mb={100} className={'project-detail_awards'}>
      <Container mb={36}>
        <Row>
          <Col xs={12}>
            <Text as={'h2'} font={'object'} size={'m'} className={'text_uppercase'}>
              {
                t('project_awards')
              }
            </Text>
          </Col>
        </Row>
      </Container>
      <CustomCursor>
        <Container className={'project-detail_awards-slider'}>
          <Row>
            <ReactIdSwiper
              {...params}
            >
              <Col className={'project-detail_awards-slider-first-item'}>

              </Col>
              <Col className={'project-detail_awards-slider-item'}>
                <Link href={'/award/asd'}>
                  <a href={'/award/asd'}>
                    <AwardCard/>
                  </a>
                </Link>
              </Col>
              <Col className={'project-detail_awards-slider-item'}>
                <Link href={'/award/asd'}>
                  <a href={'/award/asd'}>
                    <AwardCard/>
                  </a>
                </Link>
              </Col>
              <Col className={'project-detail_awards-slider-item'}>
                <Link href={'/award/asd'}>
                  <a href={'/award/asd'}>
                    <AwardCard/>
                  </a>
                </Link>
              </Col>
              <Col className={'project-detail_awards-slider-item'}>
                <Link href={'/award/asd'}>
                  <a href={'/award/asd'}>
                    <AwardCard/>
                  </a>
                </Link>
              </Col>
            </ReactIdSwiper>

          </Row>
        </Container>
      </CustomCursor>
    </Col>
  );
};

export default ProjectAwards;
