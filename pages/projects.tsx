import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ProjectList from '../pageTemplate/Projects/ProjectList';
import { ProjectsMock } from '../mock';
import Pagination from "../components/Pagination/Pagination";
import ProjectFilter from '../pageTemplate/Projects/ProjectFilter';



interface IProjectsProps {
  [prop: string]: any
}

const Projects: React.FC<IProjectsProps> = () => {
  return (
    <LayoutTitleWithContent title={'Проекты'}>

      <ProjectFilter/>

      <ProjectList
        projects={ProjectsMock}
      />
      <Pagination/>

    </LayoutTitleWithContent>
  );
};

export default Projects;
