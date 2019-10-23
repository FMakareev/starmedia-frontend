import * as React from 'react';
import Col from "../../components/Col/Col";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Text from "../../components/Text/Text";
import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";
import {File} from '../../types/types';
import {getSlidesOffsetBefore} from "../../libs/swiperUtils";

interface IProjectGalleryProps {
  gallery?: File[];

  [prop: string]: any
}

const params = () => ({
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
  slidesPerView: 'auto',
  watchOverflow: true,
  centeredSlides: false,
  spaceBetween: 32,
  slidesOffsetBefore: getSlidesOffsetBefore(),
  getSwiper: (swiper: SwiperInstance) => {
    console.log('swiper: ', swiper);

    setTimeout(() => {
      console.log('swiper setTimeout: ', swiper);
      swiper && swiper.scrollbar && swiper.scrollbar.updateSize()
    }, 1000);
    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
  // activeSlideKey: '2',
})

const ProjectGallery: React.FC<IProjectGalleryProps> = (
  {
    gallery,
  }
) => {
  const {t} = useTranslation('common');

  if (!gallery || !gallery.length) {
    return null;
  }

  const paramsConfig = params();

  return (
    <Col
      as={'section'}
      id={'gallery'}
      mb={100}
      className={'project-detail_gallery'}
    >
      <Container mb={36}>
        <Row>
          <Col xs={12}>
            <Text as={'h2'} font={'object'} size={'m'} className={'text_uppercase'}>
              {
                t('project_gallery')
              }
            </Text>
          </Col>
        </Row>
      </Container>
      <CustomCursor>
        <ReactIdSwiper {...paramsConfig}>
          {
            gallery && [{}, ...gallery].map((item: File, index: number) => {
              if (index === 0) {
                return (<Col
                  key={index}
                  className={'swiper-slide_first'}
                >

                </Col>)
              }

              return (<Col key={index}>
                <img src={item.url || ''} alt=""/>
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>


    </Col>
  );
};

export default ProjectGallery;
