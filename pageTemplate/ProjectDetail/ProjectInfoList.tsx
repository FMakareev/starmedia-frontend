import * as React from 'react';
import {Maybe, ProjectInfo} from '../../types/types';
import Text from "../../components/Text/Text";

interface IProjectInfoProps {
  projectInfo?: Maybe<ProjectInfo>;

  [prop: string]: any
}

const ProjectInfoList: React.FC<IProjectInfoProps> = ({projectInfo}) => {
  return (
    <ul className={'project-info_list'}>
      {
        projectInfo && Object.entries(projectInfo).map(([key, value]: any, index) => {
          return (<li key={index} className={'project-info_item'}>
            <Text type={'secondary'} font={'object'}  className={'project-info_label'}>
              {key}
            </Text>
            <Text type={'secondary'} font={'root'} className={'project-info_value'}>
              {value && value.ru}
            </Text>
          </li>)
        })
      }
    </ul>
  );
};

export default ProjectInfoList;
