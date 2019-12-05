import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import {Award} from "../../types/awardsTypes";
import AwardCard from '../../components/AwardCard/AwardCard';

import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";


interface IProjectAwardsProps {
  awards?: Award[];

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



const ProjectAwards: React.FC<IProjectAwardsProps> = (
  {
    awards
  }
) => {
  const {t} = useTranslation('common');
  if (!awards || awards && !awards.length) {
    return null;
  }

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
              {
                awards && [{}, ...awards].map((award: Award, index: number) => {

                  if (index === 0) {
                    return (<Col key={index} className={'project-detail_awards-slider-first-item'}>

                    </Col>)
                  }

                  return (<Col key={index} className={'project-detail_awards-slider-item'}>
                    <AwardCard
                      {...award}
                    />
                  </Col>)
                })
              }
            </ReactIdSwiper>

          </Row>
        </Container>
      </CustomCursor>
    </Col>
  );
};

export default ProjectAwards;
