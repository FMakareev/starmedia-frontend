import * as React from 'react';
import SocialLinkItem from './SocialLinkItem';
import {GetSocialList, SocialLink, SocialLinkTypeEnum} from "../../types/socialLink";
import {useQuery} from "@apollo/react-hooks";
import {GetSocials} from "../../apollo/query/GetSocials";


// @ts-ignore
const data:any =  {
  "getSocialList": [
    {
      "id": "10",
      "url": "googleplus",
      "name": "googleplus",
      "shortName": "gp"
    },
    {
      "id": "13",
      "url": "https://ok.ru/starmedia",
      "name": "odnoklassniki",
      "shortName": "OK"
    },
    {
      "id": "14",
      "url": "https://vk.com/starmediafilm",
      "name": "vkontakte",
      "shortName": "vk"
    },
    {
      "id": "9",
      "url": "https://www.youtube.com/user/starmedia",
      "name": "youtube",
      "shortName": "yt"
    },
    {
      "id": "11",
      "url": "https://www.facebook.com/starmediacompany/",
      "name": "facebook",
      "shortName": "fb"
    },
    {
      "id": "12",
      "url": "https://twitter.com/#!/StarMedia_2006",
      "name": "twitter",
      "shortName": "t"
    },
    {
      "id": "15",
      "url": "http://www.imdb.com/company/co0251864/?ref_=fn_al_co_1",
      "name": "imdb",
      "shortName": "imdb"
    },
    {
      "id": "16",
      "url": "https://www.instagram.com/starmediafilm/",
      "name": "instagram",
      "shortName": "in"
    }
  ]
}



export enum SocialLinkVariantEnum {
  icon = 'icon',
  shortName = 'shortName',
}

interface ISocialLinkListProps {
  classWrapper?: string;
  classItem?: string;
  mods?: string[];
  variant?: SocialLinkVariantEnum;
  exclude?: SocialLinkTypeEnum[];

  [prop: string]: any
}

const SocialLinkList: React.FC<ISocialLinkListProps> = (
  {
    mods,
    variant,
    exclude,
  }
) => {
  // @ts-ignore
  const {data:ar, error} = useQuery<GetSocialList>(GetSocials);

  if (error) {
    console.error(error);
  }


  let SocialList: SocialLink[] = data && data.getSocialList || [];

  if (exclude) {
    SocialList = SocialList.filter((link: SocialLink) => !(exclude.find((exLink: SocialLinkTypeEnum) => link.shortName && link.shortName.toLowerCase() === exLink)))
  }

  return (
    <React.Fragment>
      <ul className={'social-links_list'}>
        {
          SocialList.map((link: SocialLink, index: number) => (
            <li className={'social-links_item'} key={`${index}`}>
              <SocialLinkItem
                mods={mods}
                variant={variant}
                {...link}
              />
            </li>))
        }
      </ul>
    </React.Fragment>

  );
};

SocialLinkList.defaultProps = {
  variant: SocialLinkVariantEnum.icon,
}

export default SocialLinkList;
