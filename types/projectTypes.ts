import {Award} from "./awardsTypes";
import {File, LocalizedString, Maybe, PaginationPageInfo, Scalars, SeoTags, Tag} from "./types";


export interface Project {
  __typename?: "Project" | string;
  id?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<LocalizedString>;
  description?: Maybe<LocalizedString>;
  preview?: Maybe<File>;
  trailer?: Maybe<Scalars["String"]>;
  projectInfo?: Maybe<ProjectInfo>;
  awards?: Maybe<Array<Award>>;
  gallery?: Maybe<Array<File>>;
  tags?: Maybe<Array<Tag>>;
  similarProject?: Array<Project>;
};

export type ProjectInfo = {
  __typename?: "ProjectInfo";
  genre?: Maybe<LocalizedString>;
  format?: Maybe<LocalizedString>;
  productionYear?: Maybe<LocalizedString>;
  numberOfEpisodes?: Maybe<Scalars["Int"]>;
  directors?: Maybe<LocalizedString>;
  scenario?: Maybe<LocalizedString>;
  operator?: Maybe<LocalizedString>;
  composer?: Maybe<LocalizedString>;
  producer?: Maybe<LocalizedString>;
  cast?: Maybe<LocalizedString>;
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
  }
}

export type FormatGQL = {
  name: LocalizedString,
  count: number,
};

export type GetFormat = {
  getFormat: FormatGQL[],
}
