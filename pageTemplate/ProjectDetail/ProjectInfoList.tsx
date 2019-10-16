import * as React from 'react';
import {Maybe,} from '../../types/types';
import Text from "../../components/Text/Text";
import {useTranslation} from "../../libs/i18n";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import { ProjectInfo } from '../../types/projectTypes';

interface IProjectInfoProps {
  projectInfo?: Maybe<ProjectInfo>;

  [prop: string]: any
}

const ProjectInfoList: React.FC<IProjectInfoProps> = ({projectInfo}) => {

  const {t} = useTranslation('common');

  return (
    <ul className={'project-info_list'}>
      {
        projectInfo && Object.entries(projectInfo)
          .filter(([key])=>key !== '__typename')
          .map(([key, value]: any, index) => {
          return (<li key={index} className={'project-info_item'}>
            <Text type={'secondary'} font={'object'}  className={'project-info_label'}>
              {t('project-info_'+key)}
            </Text>
            <Text type={'secondary'} font={'root'} className={'project-info_value'}>
              {
                (typeof value === 'number') && value
              }
              {
                (typeof value !== 'string') && GetLocalizationString(value)
              }
            </Text>
          </li>)
        })
      }
    </ul>
  );
};

export default ProjectInfoList;
