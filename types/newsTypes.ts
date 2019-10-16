import {LocalizedString, Maybe, Scalars, SeoTags, PaginationPageInfo,File} from "./types";

export type GetNews = {
  getNews: News;
}

export interface News  {
  __typename?: "News"| string;
  slug?: Maybe<Scalars["String"]>;
  seoTags?: SeoTags,
  name?: Maybe<LocalizedString>;
  date?: Scalars["String"];
  content?: Maybe<LocalizedString>;
  preview?: Maybe<File>;
};


export type NewsPagination = {
  newsPagination: {
    __typename?: "NewsPagination"
    pageInfo?: PaginationPageInfo,
    count: number,
    items?: News[],
  }
}
