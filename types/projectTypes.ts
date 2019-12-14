import {Award} from "./awardsTypes";
import {LocalizedString, Maybe, PaginationPageInfo, ResponsiveImage, Scalars, SeoTags, Tag} from "./types";


export interface Project {
  __typename?: "Project" | string;
  id?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<LocalizedString>;
  description?: Maybe<LocalizedString>;
  preview?: Maybe<ResponsiveImage>;
  previewRu?: Maybe<ResponsiveImage>;
  previewEn?: Maybe<ResponsiveImage>;
  previewUk?: Maybe<ResponsiveImage>;

  trailerPreviewRu?: Maybe<ResponsiveImage>;
  trailerPreviewEn?: Maybe<ResponsiveImage>;
  trailerPreviewUk?: Maybe<ResponsiveImage>;

  trailer?: Maybe<Scalars["String"]>;
  projectInfo?: Maybe<ProjectInfo>;
  awards?: Maybe<Array<Award>>;
  gallery?: Maybe<Array<ResponsiveImage>>;
  tags?: Maybe<Array<Tag>>;
  similarProject?: Array<Project>;
  duration?: Maybe<Scalars["Int"]>;
};

export type ProjectInfo = {
  __typename?: "ProjectInfo";
  genre?: Maybe<LocalizedString>;
  format?: Maybe<LocalizedString>;
  productionYear?: Maybe<"Int">;
  numberOfEpisodes?: Maybe<Scalars["Int"]>;
  duration?: Maybe<Scalars["Int"]>;
  directors?: Maybe<Array<LocalizedString>>;
  productionDesigner?: Maybe<Array<LocalizedString>>;
  scenario?: Maybe<Array<LocalizedString>>;
  operator?: Maybe<Array<LocalizedString>>;
  composer?: Maybe<Array<LocalizedString>>;
  producer?: Maybe<Array<LocalizedString>>;
  cast?: Maybe<Array<LocalizedString>>;
};

export type ProjectPage = {
  project: Project,
  seoTags: SeoTags,
}

export type GetProjectPage = {
  getProjectPage: ProjectPage,
}

export type ProjectPagination = {
  projectPagination: {
    __typename: "ProjectPagination"
    pageInfo?: PaginationPageInfo,
    count: number,
    items: Project[],
  }

}


export  type GetFilters = {
  getFilters: {
    formats: LocalizedString[],
    genres: LocalizedString[],
    years: string[],
  }
}

export type FormatGQL = {
  name: LocalizedString,
  count: number,
};

export type GetFormat = {
  getFormat: FormatGQL[],
}

export type GetGenres = {
  getGenres: FormatGQL[],
}
