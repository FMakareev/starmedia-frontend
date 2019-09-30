import * as React from 'react';
import {Project} from '../../types/types';
import Col from "../../components/Col/Col";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Row from '../../components/Row/Row';
import Container from "../../components/Container/Container";

interface IProjectListProps {
  projects: Project[];

  [prop: string]: any
}

const ProjectList: React.FC<IProjectListProps> = ({projects}) => {
  return (
    <Container mb={64}>
      <Row>
        {
          projects && projects.map((item: Project, index: number) =>
            (<Col
              xs={6}
              sm={4}
              md={3}
              key={`${index}`}
            >
              <ProjectCard
                withInfo={true}
                {...item}
              />
            </Col>))
        }
      </Row>
    </Container>
  );
};

export default ProjectList;
