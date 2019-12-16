import * as React from 'react';
import Link from "next/link";
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Container from '../../components/Container/Container';
import Text from "../../components/Text/Text";
import ProjectTags from "../../components/ProjectTags/ProjectTags";
import ProjectInfoList from './ProjectInfoList';
import {ButtonElementEnum, Maybe, ResponsiveImage} from '../../types/types';
import Button from "../../components/Button/Button";
import BackIcon from "../../components/Icons/BackIcon";
import ProjectDetailMainBottom from "./ProjectDetailMainBottom";
import ProjectTrailer from "./ProjectTrailer";
import {useTranslation} from "../../libs/i18n";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {Project} from "../../types/projectTypes";
import {getLocalizationPreview} from "../../libs/getLocalizationPreview";
import {Picture} from "react-responsive-picture";
// @ts-ignore
import placeholder from "../../static/images/project-placeholder.jpg";
import { oc } from 'ts-optchain';
import {useRouter} from "next/router";

interface IProjectMainSectionProps extends Project {
  [prop: string]: any
}




const ProjectMainSection: React.FC<IProjectMainSectionProps> = (
  {
    tags,
    preview,
    projectInfo,
    title,
    trailer,
    trailerPreview,

    trailerPreviewRu,
    trailerPreviewEn,
    trailerPreviewUk,

    isBottomDescription,
    isBottomAwards,
    isBottomGallery,
    isBottomSimilar,
    duration,
    previewEn,
    previewRu,
    previewUk,
  }
) => {
  const {t, i18n} = useTranslation('common');

  const {back } = useRouter();

  const responsivePosterImage: Maybe<ResponsiveImage> = getLocalizationPreview({
      preview,
      previewEn,
      previewRu,
      previewUk,
    },
    i18n.language
  );

  const responsiveTrailerPreview: Maybe<ResponsiveImage> = getLocalizationPreview({
      preview: trailerPreview,
      previewRu:trailerPreviewRu,
      previewEn:trailerPreviewEn,
      previewUk:trailerPreviewUk,
    },
    i18n.language
  );

  return (
    <Col mb={[40, 80]} pb={40} pt={130} className={'project-detail-main_wrapper'}>
      <div className="section-main_bg">
        <Picture
          className="project-detail-main_bg-img"
          alt={'project poster'}
          // @ts-ignore
          sources={[
            {
              srcSet: oc(responsivePosterImage).xs.url(placeholder),
              media: "(max-width: 420px)",
            },
            {
              srcSet: oc(responsivePosterImage).sm.url(placeholder),
              media: "(max-width: 800px)",
            },
            {
              srcSet: oc(responsivePosterImage).md.url(placeholder),
              media: "(max-width: 1024px)",
            },
            {
              srcSet: oc(responsivePosterImage).lg.url(placeholder),
            },
          ]}
        />
      </div>
      <Container>
        <div className="project-detail-main_top">
          <Row mb={38}>
            <Col xs={12}>
              <Link href={'/projects'}>
                <Button onClick={()=>back()} element={ButtonElementEnum.transparent} mods={['light', 'icon']}>
                  <Col style={{height: '24px'}} mr={8}>
                    <BackIcon/>
                  </Col>
                  <Text font={'root'} size={'s'} type={'inherit'} as={'span'}>
                    {t('back_to-catalog')}
                  </Text>
                </Button>
              </Link>
            </Col>
          </Row>
        </div>

        <div className="project-detail-main_content">
          <Row mb={['0', '0', 52]}>
            <Col xs={12} md={6} mb={40}>
              <ProjectTrailer
                preview={responsiveTrailerPreview}
                trailer={trailer}
              />
            </Col>
            <Col xs={12} md={6}>
              <Col pl={['0', '0', 32]}>
                <Col mb={8}>
                  <ProjectTags tags={tags}/>
                </Col>
                <Text as={'h1'} className={'text_uppercase'} mb={34} font={'object'} size={'l'} type={'secondary'}>
                  {
                    GetLocalizationString(title, i18n)
                  }
                </Text>
                <ProjectInfoList projectInfo={{duration, ...projectInfo} || {}}/>
              </Col>

            </Col>
          </Row>
        </div>
        <Col
          md={12}
          as={'hr'}
          xs={'none'}
          mb={40}
        />
        <Col xs={'none'} className="project-detail-main_bottom">
          <ProjectDetailMainBottom
            isBottomDescription={isBottomDescription}
            isBottomAwards={isBottomAwards}
            isBottomGallery={isBottomGallery}
            isBottomSimilar={isBottomSimilar}

          />
        </Col>
      </Container>
    </Col>
  );
};

export default ProjectMainSection;
