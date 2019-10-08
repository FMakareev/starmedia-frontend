import * as React from 'react';
import Text from '../Text/Text';
import {Project} from '../../types/types';
// @ts-ignore
import ProgressiveImage from 'react-progressive-image';
// @ts-ignore
import Tilt from 'react-tilt'

// @ts-ignore
import placeholder from '../../static/images/project-placeholder.jpg';
import {useTranslation} from "../../libs/i18n";
import classNames from 'classnames';
import {GetLocalizationString} from "../../libs/GetLocalizationString";

interface IProjectCardProps extends Project {
  withInfo?: boolean;

  [prop: string]: any
}

const ProjectCard: React.FC<IProjectCardProps> = ({withInfo, href, title, projectInfo, preview, disabled}) => {
  const {t, i18n} = useTranslation();

  const localTitle = GetLocalizationString(title);
  return (<a
    href={href}
    className={classNames('project-card_wrapper', {
      'project-card_wrapper--disabled': disabled
    })}
  >
    <Tilt
      options={{max: 5, scale: 1}}
    >
      <div
        className="project-card_preview"
      >

        <ProgressiveImage
          src={preview && preview.url || ''}
          placeholder={placeholder}
        >
          {
            (src: string) => <img
              className="project-card_preview-img"
              src={src}
              alt={localTitle || 'project poster'}
            />
          }
        </ProgressiveImage>
        <div className="project-card_detail">
          <Text
            className={'text_uppercase'}
            font={'object'}
            size={'xs'}
            type={'secondary'}
          >
            {t('button_detail-project')}
          </Text>
        </div>
      </div>
    </Tilt>

    {
      withInfo && <div className="project-card_info">
				<div className="project-card_info-title">
          {
            localTitle
          }
				</div>
				<div className="project-card_info-genre">
          {
            projectInfo
            && projectInfo.genre
            // @ts-ignore
            && projectInfo.genre[i18n.language] ? projectInfo.genre[i18n.language] : null
          }

          {
            GetLocalizationString(projectInfo && projectInfo.genre)
          }
				</div>
			</div>
    }
  </a>)
};

export default ProjectCard;
