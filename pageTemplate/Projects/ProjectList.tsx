import * as React from 'react';
import {Project} from '../../types/projectTypes';
import Col from "../../components/Col/Col";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Container from "../../components/Container/Container";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface IProjectListProps {
  projects?: Project[];

  [prop: string]: any
}

const ProjectList: React.FC<IProjectListProps> = ({projects}) => {
  return (
    <Container mb={[24,24,64]}>
      <TransitionGroup className={'row'}>
        {
          projects && projects.map((item: Project, index: number) =>
            (
              <CSSTransition
                timeout={300}
                key={index}
                classNames={'transition-list'}
              >
                <Col
                  xs={6}
                  sm={4}
                  md={3}
                  key={`${index}`}
                >
                  <ProjectCard
                    className={'project-card_preview--catalog'}
                    withInfo={true}
                    href={`/project/${item.slug}`}
                    {...item}
                  />
                </Col>
              </CSSTransition>
            ))
        }
      </TransitionGroup>
    </Container>
  );
};

export default ProjectList;
