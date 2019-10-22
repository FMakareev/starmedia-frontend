import * as React from 'react';
import Text from "../../components/Text/Text";
import {useTranslation} from "../../libs/i18n";
import {GetLocalizationString, ArrayIsLocalizationString} from "../../libs/GetLocalizationString";
import {ProjectInfo} from '../../types/projectTypes';

interface IProjectInfoProps {
  projectInfo?: ProjectInfo;

  [prop: string]: any
}

//   "minutes_case-0": "минут",
//   "minutes_case-1": "минута",
//   "minutes_case-2": "минуты"

const getMinutesCase = (_count?:number):string => {
  if(!_count) return '';
  let count = _count > 9 && _count !== 11 ? parseInt(_count.toString()[_count.toString().length - 1]) : _count
  if (count > 1 && count < 5) {
    return "minutes_case-2"
  } else if (count > 4 || count === 0) {
    return "minutes_case-0"
  } else if (count === 1) {
    return "minutes_case-1"
  }
  return '';
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
      (typeof value === 'string') && value
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
};


const ProjectInfoItem = (
  {
    label,
    value
  }: any
) => {
  const {t, i18n} = useTranslation('common');

  if (!value || Array.isArray(value) && !value.length) {
    return null;
  }

  if( Array.isArray(value) && !ArrayIsLocalizationString(value, i18n)) {
    return null
  }
  return (<li className={'project-info_item'}>
    <Text type={'secondary'} font={'object'} className={'project-info_label'}>
      {t(label)}
    </Text>
    <ProjectInfoItemValue
      value={value}
    />
  </li>)
};

const ProjectInfoList: React.FC<IProjectInfoProps> = ({projectInfo}) => {

  const {t} = useTranslation();
  if (!projectInfo) {
    return null;
  }

  return (
    <ul className={'project-info_list'}>


      <ProjectInfoItem
        label={'project-info_format'}
        value={projectInfo && projectInfo.format}
      />
      <ProjectInfoItem
        label={'project-info_genre'}
        value={projectInfo && projectInfo.genre}
      />
      <ProjectInfoItem
        label={'project-info_productionYear'}
        value={projectInfo && projectInfo.productionYear}
      />
      <ProjectInfoItem
        label={'project-info_numberOfEpisodes'}
        value={projectInfo && projectInfo.numberOfEpisodes}
      />
      <ProjectInfoItem
        label={'project-info_duration'}
        value={projectInfo && `${projectInfo.duration} ${t(getMinutesCase(projectInfo && projectInfo.duration || undefined))}`}
      />
      <ProjectInfoItem
        label={'project-info_directors'}
        value={projectInfo && projectInfo.directors}
      />
      <ProjectInfoItem
        label={'project-info_scenario'}
        value={projectInfo && projectInfo.scenario}
      />
      <ProjectInfoItem
        label={'project-info_operator'}
        value={projectInfo && projectInfo.operator}
      />
      <ProjectInfoItem
        label={'project-info_production-designer'}
        value={projectInfo && projectInfo.productionDesigner}
      />
      <ProjectInfoItem
        label={'project-info_composer'}
        value={projectInfo && projectInfo.composer}
      />
      <ProjectInfoItem
        label={'project-info_producer'}
        value={projectInfo && projectInfo.producer}
      />
      <ProjectInfoItem
        label={'project-info_cast'}
        value={projectInfo && projectInfo.cast}
      />

    </ul>
  );
};

export default ProjectInfoList;
