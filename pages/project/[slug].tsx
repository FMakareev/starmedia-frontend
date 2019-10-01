import * as React from 'react';
import {ProjectsMock, AwardMock, ProjectMock} from '../../mock';
import ProjectSimilar from "../../pageTemplate/ProjectDetail/ProjectSimilar";
import ProjectAwards from '../../pageTemplate/ProjectDetail/ProjectAwards';
import ProjectDescription from '../../pageTemplate/ProjectDetail/ProjectDescription';
import ProjectGallery from '../../pageTemplate/ProjectDetail/ProjectGallery';
import ProjectMainSection from '../../pageTemplate/ProjectDetail/ProjectMainSection';

// @ts-ignore
import ReactCursorPosition from 'react-cursor-position';

interface IProjectDetailProps {
  [prop: string]: any
}



const ProjectDetail: React.FC<IProjectDetailProps> = () => {

  return (
    <div>
      <ProjectMainSection {...ProjectMock}/>
      <ProjectDescription {...ProjectMock}/>
      <ProjectAwards
        awards={AwardMock}
      />
      <ProjectGallery/>
      <ProjectSimilar projects={ProjectsMock.splice(0, 4)}/>
    </div>
  );
};

export default ProjectDetail;
