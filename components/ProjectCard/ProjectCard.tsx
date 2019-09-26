import * as React from 'react';
import Text from '../Text/Text';
import {Project} from '../../types/types';

// @ts-ignore
import Tilt from 'react-tilt'

interface IProjectCardProps extends Project {
  withInfo?: boolean;

  [prop: string]: any
}

const ProjectCard: React.FC<IProjectCardProps> = ({withInfo, title, projectInfo, preview,}) => {
  return (<div className={'project-card_wrapper'}>
    <Tilt options={{ max : 5,scale: 1 }} >
      <div className="project-card_preview">
        <img
          src={preview && preview.url || ''}
          alt={title && title.ru || ''}
          className="project-card_preview-img"
        />
        <div className="project-card_detail">
          <Text className={'text_uppercase'} font={'object'} size={'xs'} type={'secondary'}>
            Подробнее о проекте
          </Text>
        </div>
      </div>
    </Tilt>

    {
      withInfo && <div className="project-card_info">
				<div className="project-card_info-title">
          {title && title.ru}
				</div>
				<div  className="project-card_info-genre">
          {projectInfo && projectInfo.genre && projectInfo.genre.ru}
				</div>
			</div>
    }
  </div>)
};

export default ProjectCard;
