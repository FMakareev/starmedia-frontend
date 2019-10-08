import * as React from 'react';

import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import {ButtonElementEnum, Project, ViewportSizeEnum} from '../../../types/types';
import Button from "../../../components/Button/Button";
import {ProjectsMock} from "../../../mock";
import Link from "../../../components/Link/Link";
import {useTranslation} from "../../../libs/i18n";

interface ISectionProjectsProps {
  [prop: string]: any
}


const SectionProjects: React.FC<ISectionProjectsProps> = () => {
  const {t} = useTranslation(['home']);

  return (
    <Col pt={60} pb={60} className={'section-projects'}>
      <Container mb={[24, 80]}>
        <Text className={'text_uppercase'} size={'l'} as={'h2'}>
          {t('section_project_title')}
        </Text>
      </Container>

      <Container mb={80}>
        <Row className="section-projects_grid">
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

          <Link href={'/projects'}>
            <Button aria-label={'show all projects'} mods={['m']} element={ButtonElementEnum.circle}>
              {t('section_project_btn-all-projects')}
            </Button>
          </Link>
        </Row>
      </Container>
    </Col>
  );
};

export default SectionProjects;
