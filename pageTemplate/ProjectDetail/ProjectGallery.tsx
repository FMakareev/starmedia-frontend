import * as React from 'react';
import Col from "../../components/Col/Col";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Text from "../../components/Text/Text";
import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";
import {ResponsiveImage, Maybe} from '../../types/types';
import {getSlidesOffsetBefore} from "../../libs/swiperUtils";
import {isBrowser} from "../../libs/isBrowser/isBrowser";
import {Picture} from "react-responsive-picture";
// @ts-ignore
import placeholder from "../../static/images/project-placeholder.jpg";
import { oc } from 'ts-optchain';


interface IProjectGalleryProps {
  gallery?: Maybe<ResponsiveImage[]>;

  [prop: string]: any
}

const updateSizeScroll = (gallery: ResponsiveImage[]) => {


  return (swiper: SwiperInstance) => {
    if (!isBrowser) return;
    let Counter = 0;
    let TotalImages = gallery.length;

    try {
      gallery.forEach((item: ResponsiveImage) => {
        if (oc(item).xs.url) {
          const image = new Image();
          image.onload = () => {
            Counter++;
            if (Counter < TotalImages) {
              return;
            }
            setTimeout(()=>{
              swiper && swiper.scrollbar && swiper.scrollbar.updateSize();
            },1000)
          };
          image.src = oc(item).xs.url('');
        }
      })
    } catch (e) {
      console.error(e);
    }


  }
};


const params = (gallery: ResponsiveImage[]) => ({
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
            gallery && [{}, ...gallery].map((item: ResponsiveImage, index: number) => {
              if (index === 0) {
                return (<Col
                  key={index}
                  className={'swiper-slide_first'}
                >

                </Col>)
              }

              return (<Col key={index}>
                <Picture
                  className="project-detail-main_bg-img"
                  alt={'project poster'}
                  // @ts-ignore
                  sources={[
                    {
                      srcSet: oc(item).xs.url(placeholder),
                    },
                  ]}
                />
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>


    </Col>
  );
};

export default ProjectGallery;
