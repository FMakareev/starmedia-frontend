import {SocialLink, SocialLinkTypeEnum} from "./types/types";

export const SocialLinkListMock: SocialLink[] = [
  {
    url: 'https://www.youtube.com/user/starmedia',
    icon: SocialLinkTypeEnum.youtube,
    shortName: 'YT'
  },
  {
    url: 'https://www.facebook.com/starmediacompany/',
    icon: SocialLinkTypeEnum.facebook,
    shortName: 'FB'
  },
  {
    url: 'https://vk.com/starmediafilm',
    icon: SocialLinkTypeEnum.vk,
    shortName: 'VK'
  },
  {
    url: 'https://ok.ru/starmedia',
    icon: SocialLinkTypeEnum.ok,
    shortName: 'OK'
  },
  {
    url: '',
    icon: SocialLinkTypeEnum.in,
    shortName: 'IN'
  },
];
