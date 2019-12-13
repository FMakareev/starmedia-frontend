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

const updateSizeScroll = (gallery: File[]) => {


  return (swiper: SwiperInstance) => {
    if (typeof window === undefined && typeof document === undefined) return;
    let Counter = 0;
    let TotalImages = gallery.length;

    try {
      gallery.forEach((item: File) => {
        if (item.url) {
          const image = new Image();
          image.onload = () => {
            Counter++;
            // Verify if the counter is less than the number of images
            if (Counter < TotalImages) {
              return;
            }
            swiper && swiper.scrollbar && swiper.scrollbar.updateSize();
          };
          image.src = item.url;
        }
      })
    } catch (e) {
      console.log(e);
    }


  }
};


const params = (gallery: File[]) => ({
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  slidesPerView: 'auto',
  watchOverflow: true,
  centeredSlides: false,
  spaceBetween: 32,
  slidesOffsetBefore: getSlidesOffsetBefore(),
  getSwiper: (swiper: SwiperInstance) => {
    console.log('swiper: ', swiper);

    updateSizeScroll(gallery)(swiper);

    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    });
  }
});

const ProjectGallery: React.FC<IProjectGalleryProps> = (
  {
    gallery,
  }
) => {
  const {t} = useTranslation('common');

  if (!gallery || !gallery.length) {
    return null;
  }

  const paramsConfig = params(gallery);

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
                <img id={item.url || 'empty'} src={item.url || ''} alt=""/>
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>


    </Col>
  );
};

export default ProjectGallery;
