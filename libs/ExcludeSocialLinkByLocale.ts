import {SocialLinkTypeEnum} from "../types/socialLink";

interface excludeSocialLinkByLocaleProps {
  ru: SocialLinkTypeEnum[]
  en: SocialLinkTypeEnum[]
  uk: SocialLinkTypeEnum[]
}

export const ExcludeSocialLinkByLocale = (excludeLinks: excludeSocialLinkByLocaleProps, i18n: any) => {
  if (i18n) {
    // @ts-ignore
    return i18n.language in excludeLinks && excludeLinks[i18n.language]
  }
};
