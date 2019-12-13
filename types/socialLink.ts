import {Scalars} from "./types";

export enum SocialLinkTypeEnum {
  IMDB = 'imdb',
  GOOGLE_PLUS = 'gp',
  OK = 'ok',
  IN = 'in',
  FACEBOOK = 'fb',
  VK = 'vk',
  YOUTUBE = 'yt',
  TWITTER = 't',
}

export type SocialLink = {
  __typename?: "SocialLink";
  id?: Scalars["String"];
  url?: Scalars["String"];
  name?: Scalars["String"];
  shortName?: SocialLinkTypeEnum;
};


export type GetSocialList = {
  getSocialList: SocialLink[],
}
