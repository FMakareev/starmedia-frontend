import * as React from 'react';
import Col from "../../components/Col/Col";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Text from "../../components/Text/Text";
import ReactIdSwiper, {SwiperInstance} from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import CustomCursor from "../../components/CustomCursor/CustomCursor";

interface IProjectGalleryProps {
  [prop: string]: any
}

const params = {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 24,
  getSwiper:(swiper: SwiperInstance)=>{
    swiper && swiper.on('touchMove',(event: any)=>{
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
  // activeSlideKey: '2',
};


const mock: any[] = [
  "/static/images/mock/image1.jpg",
  "/static/images/mock/image3.jpg",
  "/static/images/mock/image2.jpg",
  "/static/images/mock/image1.jpg",
  "/static/images/mock/image3.jpg",
  "/static/images/mock/image2.jpg",
  "/static/images/mock/image1.jpg",
  "/static/images/mock/image3.jpg",
  "/static/images/mock/image2.jpg",
  "/static/images/mock/image1.jpg",
  "/static/images/mock/image3.jpg",
  "/static/images/mock/image2.jpg",
]

const ProjectGallery: React.FC<IProjectGalleryProps> = () => {

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
              Галерея
            </Text>
          </Col>
        </Row>
      </Container>
      <CustomCursor>
        <ReactIdSwiper {...params}>
          {
            mock.map((item: string, index: number) => {
              if (index === 0) {
                return (<Col key={index} className={'project-detail_gallery-first-item'}>

                </Col>)
              }

              return (<Col key={index}>
                <img src={item} alt=""/>
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>


    </Col>
  );
};

export default ProjectGallery;
