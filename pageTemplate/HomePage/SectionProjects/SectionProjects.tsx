import * as React from 'react';

import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import {ButtonElementEnum, Project, ViewportSizeEnum} from '../../../types/types';
import Button from "../../../components/Button/Button";
import {ProjectsMock} from "../../../mock";

interface ISectionProjectsProps {
  [prop: string]: any
}


const SectionProjects: React.FC<ISectionProjectsProps> = () => {
  return (
    <Col pt={60} pb={60} className={'section-projects'}>
      <Container mb={[24,80]}>
        <Text className={'text_uppercase'} size={'l'} as={'h2'}>
          Проекты
        </Text>
      </Container>

      <Container>
        <Row mb={80} className="section-projects_grid">
          {
            ProjectsMock.map((item: Project, index: number) =>
              <Col key={index}>
                <ProjectCard withInfo={false} {...item}/>
              </Col>)
          }
        </Row>
      </Container>

      <Container>
        <Row center={ViewportSizeEnum.sm}>
          <Button mods={['m']} element={ButtonElementEnum.circle}>
            Все <br/> проекты
          </Button>
        </Row>
      </Container>
    </Col>
  );
};

export default SectionProjects;
