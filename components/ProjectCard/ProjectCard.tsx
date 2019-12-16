import * as React from 'react';
import Text from '../Text/Text';
import {Project} from '../../types/projectTypes';
// @ts-ignore
import ProgressiveImage from 'react-progressive-image';
// @ts-ignore
import Tilt from 'react-tilt'
import {oc} from 'ts-optchain';

import {useTranslation} from "../../libs/i18n";
import classNames from 'classnames';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import Link from "next/link";
import {getLocalizationPreview} from "../../libs/getLocalizationPreview";
// @ts-ignore
import placeholder from "../../static/images/project-placeholder.jpg";

interface IProjectCardProps extends Project {
  withInfo?: boolean;

  [prop: string]: any
}

const ProjectCard: React.FC<IProjectCardProps> = (
  {
    withInfo,
    href,
    title,
    projectInfo,
    preview,
    disabled,
    previewEn,
    previewRu,
    previewUk,
    className,
    as,
  }
) => {
  const {t, i18n} = useTranslation();
  const localTitle = GetLocalizationString(title, i18n);
  const localGenre = GetLocalizationString(projectInfo && projectInfo.genre, i18n);

  const previewImage = getLocalizationPreview({
      preview,
      previewEn,
      previewRu,
      previewUk,
    },
    i18n.language
  );

  return (<Link href={href} as={as}>
    <a
      className={classNames('project-card_wrapper', {
        'project-card_wrapper--disabled': disabled
      })}
    >
      <Tilt
        options={{max: 5, scale: 1}}
      >
        <div
          className={classNames('project-card_preview', className)}
        >
          <ProgressiveImage src={oc(previewImage).xs.url(placeholder) || ''} placeholder={placeholder}>
            {(src: string) => <img
              src={src}
              className="project-card_preview-img"
              alt={localTitle || 'project poster'}
            />}
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
					<div className="project-card_info-title mb-4">
            {
              localTitle
            }
					</div>
					<div className="project-card_info-genre">
            {
              localGenre
            }
					</div>
				</div>
      }
    </a>
  </Link>)
};

export default ProjectCard;
