import * as React from 'react';
import {Project} from "../../../types/projectTypes";
import {getLocalizationPreview} from "../../../libs/getLocalizationPreview";
import { oc } from 'ts-optchain';
import {useTranslation} from "../../../libs/i18n";
import {Picture} from "react-responsive-picture";
// @ts-ignore
import placeholder from "../../../static/images/project-placeholder.jpg";
import {Maybe, ResponsiveImage} from "../../../types/types";

interface ISectionMainBgProps {
  project?: Project;
  [prop: string]: any
}
// TODO: адапив картинок
const SectionMainBg: React.FC<ISectionMainBgProps> = (
  {
    project,
  }
  ) => {
  const {i18n} = useTranslation();

  //

  console.log('project: ', project);
  const responsivePreviewImage: Maybe<ResponsiveImage> = getLocalizationPreview({
      preview: project && project.preview,
      previewEn: project && project.previewEn,
      previewRu: project && project.previewRu,
      previewUk: project && project.previewUk,
    },
    i18n.language
  );

  return (
    <div className="section-main_bg">

      <Picture
        alt={'project poster'}
        // @ts-ignore
        sources={[
          {
            srcSet: oc(responsivePreviewImage).xs.url(placeholder),
            media: "(max-width: 420px)",
          },
          {
            srcSet: oc(responsivePreviewImage).sm.url(placeholder),
            media: "(max-width: 800px)",
          },
          {
            srcSet: oc(responsivePreviewImage).md.url(placeholder),
            media: "(max-width: 1024px)",
          },
          {
            srcSet: oc(responsivePreviewImage).lg.url(placeholder),
          },
        ]}
      />
    </div>
  );
};

export default SectionMainBg;
