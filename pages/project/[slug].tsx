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
import { GetProjectPage } from '../../types/projectTypes';
import {GetLocalizationString} from "../../libs/GetLocalizationString";

interface IProjectDetailProps {
  [prop: string]: any
}


const ProjectDetail: React.FC<IProjectDetailProps> = () => {
  const {query} = useRouter();


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

  return (
    <Fragment>
      <Head
        seoTags={data && data.getProjectPage.seoTags}
        title={GetLocalizationString(data && data.getProjectPage.project.title)}
      />
      <ProjectMainSection
        {...(data && data.getProjectPage.project)}
      />
      <ProjectDescription
        {...(data && data.getProjectPage.project)}
      />
      <ProjectAwards
        awards={data && data.getProjectPage.project.awards || []}
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
