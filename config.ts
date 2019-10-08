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
    url: 'https://www.linkedin.com/company/star-media-group-russia-ukraine-/',
    icon: SocialLinkTypeEnum.in,
    shortName: 'IN'
  },
];

export default {
  googleMap: {
    key: "AIzaSyAheztZVzzEHN5zCYbNqq_Ws6eo8S8Cl8s"
  },
  serverURI:  "http://localhost:9002",
  graphql: {
    serverEndpoint: "http://localhost:9002/graphql",
    clientEndpoint: "/graphql",

    devServerEndpoint: "http://localhost:9002/graphql",
    devClientEndpoint: "/graphql",
  }
};
