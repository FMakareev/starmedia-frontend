import * as React from 'react';

import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import {ButtonElementEnum, ViewportSizeEnum} from '../../../types/types';
import Button from "../../../components/Button/Button";
import Link from "../../../components/Link/Link";
import {useTranslation} from "../../../libs/i18n";
import {Project} from "../../../types/projectTypes";
import ReactHtmlParser from "react-html-parser";

interface ISectionProjectsProps {
  projectList?: Project[];
  [prop: string]: any
}


const SectionProjects: React.FC<ISectionProjectsProps> = ({projectList}) => {
  const {t} = useTranslation(['home']);

  return (
    <Col pt={60} pb={60} className={'section-projects'}>
      <Container mb={[24, 90]}>
        <Text className={'text_uppercase'} size={'l'} as={'h2'}>
          {t('section_project_title')}
        </Text>
      </Container>

      <Container mb={80}>
        <Row className="section-projects_grid">
          {
            projectList
            && projectList.map((item: Project, index: number) =>{
              return (<Col key={index}>
                <ProjectCard
                  className={'project-card_preview--catalog'}
                  href={`/project/[slug]`}
                  as={`/project/${item.slug}`}
                  withInfo={false} {...item}/>
              </Col>)
            })
          }
        </Row>
      </Container>

      <Container>
        <Row center={ViewportSizeEnum.xs}>

          <Link href={'/projects'}>
            <Button aria-label={'show all projects'} mods={['m']} element={ButtonElementEnum.circle}>
              <span className={'reset-style'}>
                 {
                   ReactHtmlParser(t('section_project_btn-all-projects'))
                 }
              </span>
            </Button>
          </Link>
        </Row>
      </Container>
    </Col>
  );
};

export default SectionProjects;
