import * as React from 'react';
import Text from "../../components/Text/Text";
import {useTranslation} from "../../libs/i18n";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {ProjectInfo} from '../../types/projectTypes';

interface IProjectInfoProps {
  projectInfo?: ProjectInfo;

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


      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_genre')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.genre}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_productionYear')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.productionYear}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_directors')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.directors}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_scenario')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.scenario}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_scenario')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.scenario}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_operator')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.operator}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_production-designer')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.productionDesigner}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_composer')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.composer}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_producer')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.producer}
        />
      </li>
      <li className={'project-info_item'}>
        <Text type={'secondary'} font={'object'} className={'project-info_label'}>
          {t('project-info_cast')}
        </Text>
        <ProjectInfoItemValue
          value={projectInfo && projectInfo.cast}
        />
      </li>



      {/*{*/}
      {/*  projectInfo && Object.entries(projectInfo)*/}
      {/*    .filter(([key]) => key !== '__typename')*/}
      {/*    .map(([key, value]: any, index) => {*/}
      {/*      return (<li key={index} className={'project-info_item'}>*/}
      {/*        <Text type={'secondary'} font={'object'} className={'project-info_label'}>*/}
      {/*          {t('project-info_' + key)}*/}
      {/*        </Text>*/}
      {/*        <ProjectInfoItemValue*/}
      {/*          value={value}*/}
      {/*        />*/}

      {/*      </li>)*/}
      {/*    })*/}
      {/*}*/}
    </ul>
  );
};

export default ProjectInfoList;
