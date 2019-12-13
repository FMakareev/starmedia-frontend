import * as React from 'react';
import {Fragment} from "react";
import {useRouter} from "next/router";
import ProjectSimilar from "../../pageTemplate/ProjectDetail/ProjectSimilar";
import ProjectAwards from '../../pageTemplate/ProjectDetail/ProjectAwards';
import ProjectDescription from '../../pageTemplate/ProjectDetail/ProjectDescription';
import ProjectGallery from '../../pageTemplate/ProjectDetail/ProjectGallery';
import ProjectMainSection from '../../pageTemplate/ProjectDetail/ProjectMainSection';

import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetProjectUKQuery, GetProjectENQuery, GetProjectRUQuery} from '../../apollo/query/GetProjectQuery';
import Preloader from "../../components/Preloader/Preloader";
import Head from "../../components/Head/Head";
import {GetProjectPage} from '../../types/projectTypes';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";
import memo from "fast-memoize";
import {Award} from "../../types/awardsTypes";

interface IProjectDetailProps {
  [prop: string]: any
}

const filterAwards = memo((awards: Award[], language: string): Award[] => {

  if (language === 'ru') {
    return awards.filter((award: Award) => award.localizationRu)
  }
  if (language === 'en') {
    return awards.filter((award: Award) => award.localizationEn)
  }
  if (language === 'uk') {
    return awards.filter((award: Award) => award.localizationUk)
  }
  return awards

});


const ProjectDetail: React.FC<IProjectDetailProps> = () => {
  const {query} = useRouter();

  const {i18n} = useTranslation();

  const {data, loading} = useLocalizationQuery<GetProjectPage>({
    ru: GetProjectRUQuery,
    en: GetProjectENQuery,
    uk: GetProjectUKQuery,
  }, {
    variables: {
      slug: query.slug
    }
  });

  if (loading) {
    return <Preloader/>
  }

  const Awards: Award[] = filterAwards(data && data.getProjectPage.project.awards && data.getProjectPage.project.awards || [], i18n.language);
  return (
    <Fragment>
      <Head
        seoTags={data && data.getProjectPage.seoTags}
        title={GetLocalizationString(data && data.getProjectPage.project.title, i18n)}
      />
      <ProjectMainSection
        {...(data && data.getProjectPage.project)}

        isBottomDescription={!!(data && data.getProjectPage.project.description)}
        isBottomAwards={!!(Awards.length)}
        isBottomGallery={!!(data && data.getProjectPage.project.gallery && data.getProjectPage.project.gallery.length)}
        isBottomSimilar={!!(data
          && data.getProjectPage.project.similarProject
          && data.getProjectPage.project.similarProject.length
        )}
      />
      <ProjectDescription
        {...(data && data.getProjectPage.project)}
      />
      <ProjectAwards
        awards={Awards || []}
      />
      <ProjectGallery
        gallery={data && data.getProjectPage.project.gallery || []}
      />
      <ProjectSimilar
        projects={data && data.getProjectPage.project.similarProject}
      />
    </Fragment>
  );
};

export default ProjectDetail;
