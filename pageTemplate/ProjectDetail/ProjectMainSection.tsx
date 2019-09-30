import * as React from 'react';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Container from '../../components/Container/Container';
import Text from "../../components/Text/Text";
import ProjectTags from "../../components/ProjectTags/ProjectTags";
import ProjectInfoList from './ProjectInfoList';
import {ButtonElementEnum, Project} from '../../types/types';
import Button from "../../components/Button/Button";
import BackIcon from "../../components/Icons/BackIcon";
import ProjectDetailMainBottom from "./ProjectDetailMainBottom";
import ProjectTrailer from "./ProjectTrailer";

interface IProjectMainSectionProps extends Project {
  [prop: string]: any
}

const ProjectMainSection: React.FC<IProjectMainSectionProps> = ({
                                                                  tags,
                                                                  projectInfo,
                                                                  title
                                                                }) => {
  return (
    <Col mb={[40,80]} pb={40} pt={130} className={'project-detail-main_wrapper'}>
      <div className="section-main_bg">
        <img
          src={'/static/images/mock/image4.jpg'}
          alt=""
          className="project-detail-main_bg-img"
        />
      </div>
      <Container>
        <div className="project-detail-main_top">
          <Row mb={40}>
            <Col xs={12}>
              <Button element={ButtonElementEnum.transparent} mods={['light', 'icon']}>
                <Col mr={8}>
                  <BackIcon/>
                </Col>
                <Text font={'root'} size={'s'} type={'inherit'} as={'span'}>
                  Вернуться в каталог
                </Text>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="project-detail-main_content">
          <Row mb={['0','0',72]}>
            <Col xs={12} md={6} mb={40}>
              <ProjectTrailer/>
            </Col>
            <Col xs={12} md={6}>
              <Col pl={['0','0',32]}>
                <Col mb={20}>
                  <ProjectTags tags={tags}/>
                </Col>
                <Text as={'h1'} className={'text_uppercase'} mb={24} font={'object'} size={'l'} type={'secondary'}>
                  {title && title.ru}
                </Text>
                <ProjectInfoList projectInfo={projectInfo}/>
              </Col>

            </Col>
          </Row>
        </div>
        <Col
          md={12}
          as={'hr'}
          xs={'none'}
          mb={40}
        />
        <Col xs={'none'} className="project-detail-main_bottom">
          <ProjectDetailMainBottom/>
        </Col>
      </Container>
    </Col>
  );
};

export default ProjectMainSection;
