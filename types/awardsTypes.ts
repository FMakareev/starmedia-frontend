import {LocalizedString, Maybe, Scalars, SeoTags, PaginationPageInfo} from "./types";

export type GetAward = {
  getAward: Award;
}

export type Award = {
  __typename?: "Award" | string;
  seoTags?: SeoTags,
  name?: Maybe<LocalizedString>;
  date?: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<LocalizedString>;
  shortDescription?: Maybe<LocalizedString>;
  content?: Maybe<LocalizedString>;
  localizationUk?: boolean;
  localizationRu?: boolean;
  localizationEn?: boolean;
};


export type AwardPagination = {
  awardPagination: {
    __typename: "AwardPagination"
    pageInfo?: PaginationPageInfo,
    count: number,
    items?: Award[],
  }
}

