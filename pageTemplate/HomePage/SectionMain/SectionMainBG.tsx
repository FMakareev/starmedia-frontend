import * as React from 'react';
import {Project} from "../../../types/projectTypes";

interface ISectionMainBgProps {
  project?: Project;
  [prop: string]: any
}

const SectionMainBg: React.FC<ISectionMainBgProps> = ({project}) => {
  return (
    <div className="section-main_bg">
      <img src={project && project.preview && project.preview.url || ''} alt=""/>
    </div>
  );
};

export default SectionMainBg;
