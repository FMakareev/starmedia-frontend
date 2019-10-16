import * as React from 'react';
import SocialLinkItem from './SocialLinkItem';
import {GetSocialList, SocialLink, SocialLinkTypeEnum} from "../../types/socialLink";
import {useQuery} from "@apollo/react-hooks";
import {GetSocials} from "../../apollo/query/GetSocials";


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

  const {data, error} = useQuery<GetSocialList>(GetSocials);

  if (error) {
    console.error(error);
  }


  let SocialList: SocialLink[] = data && data.getSocialList || [];

  if (exclude) {
    SocialList = SocialList.filter((link: SocialLink) => !(exclude.find((exLink: SocialLinkTypeEnum) => link.shortName === exLink)))
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
