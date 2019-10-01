import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {Project} from '../../types/types';
import ReactIdSwiper, {SwiperInstance} from "react-id-swiper";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import {useTranslation} from "../../libs/i18n";

interface IProjectSimilarProps {
  projects: Project[];

  [prop: string]: any
}

const params = {
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 32,
  getSwiper: (swiper: SwiperInstance) => {
    swiper && swiper.on('touchMove', (event: any) => {
      // @ts-ignore
      window.customCursor.clientX = event.clientX;
      // @ts-ignore
      window.customCursor.clientY = event.clientY;
    })
  }
  // activeSlideKey: '2',
};

const ProjectSimilar: React.FC<IProjectSimilarProps> = ({projects}) => {
  const {t} = useTranslation('common');

  return (
    <Col mb={[60, 100]}>
      <Container as={'section'} id={'similar'}>
        <Row mb={[34, 40]}>
          <Col xs={12}>
            <Text as={'h2'} font={'object'} size={'m'} className={'text_uppercase'}>
              {
                t('project_similar')
              }
            </Text>
          </Col>
        </Row>
      </Container>

      <CustomCursor>
        <ReactIdSwiper {...params}>
          {
            [{}, ...projects, ...projects].map((item: Project, index: number) => {
              if (index === 0) {
                return (<Col key={index} className={'project-detail-similar_first-item'}>

                </Col>)
              }

              return (<Col
                key={index}
                style={{
                  width: '279px'
                }}
              >
                <ProjectCard withInfo={true} {...item}/>
              </Col>)
            })
          }
        </ReactIdSwiper>
      </CustomCursor>

    </Col>
  );
};

export default ProjectSimilar;
