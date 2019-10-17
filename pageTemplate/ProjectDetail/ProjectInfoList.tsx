import * as React from 'react';
import {Maybe,} from '../../types/types';
import Text from "../../components/Text/Text";
import {useTranslation} from "../../libs/i18n";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {ProjectInfo} from '../../types/projectTypes';

interface IProjectInfoProps {
  projectInfo?: Maybe<ProjectInfo>;

  [prop: string]: any
}


const ProjectInfoItemValue = (
  {
    value,

  }: any
) => {
  const {i18n} = useTranslation('common');

  return (<Text type={'secondary'} font={'root'} className={'project-info_value'}>
    {
      (typeof value === 'number') && value
    }
    {
      Array.isArray(value) && value.map((item: any, index) => (
        <span key={index}>
          {
            GetLocalizationString(item, i18n)
          }{index < value.length - 1 ? ', ' : ''}
        </span>))
    }
    {
      (!Array.isArray(value) && typeof value !== 'string') && GetLocalizationString(value, i18n)
    }
  </Text>)
}

const ProjectInfoList: React.FC<IProjectInfoProps> = ({projectInfo}) => {

  const {t} = useTranslation('common');

  return (
    <ul className={'project-info_list'}>
      {
        projectInfo && Object.entries(projectInfo)
          .filter(([key]) => key !== '__typename')
          .map(([key, value]: any, index) => {
            return (<li key={index} className={'project-info_item'}>
              <Text type={'secondary'} font={'object'} className={'project-info_label'}>
                {t('project-info_' + key)}
              </Text>
              <ProjectInfoItemValue
                value={value}
              />

            </li>)
          })
      }
    </ul>
  );
};

export default ProjectInfoList;
