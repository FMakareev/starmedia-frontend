import * as React from 'react';
import {SocialLink} from "../../types/types";
import SocialLinkItem from './SocialLinkItem';


export enum SocialLinkVariantEnum {
  icon = 'icon',
  shortName = 'shortName',
}

interface ISocialLinkListProps {
  links: SocialLink[];
  classWrapper?: string;
  classItem?: string;
  mods?: string[];
  variant?: SocialLinkVariantEnum;

  [prop: string]: any
}

const SocialLinkList: React.FC<ISocialLinkListProps> = ({links,mods,variant}) => {
  return (
   <React.Fragment>
     <ul className={'social-links_list'}>
       {
         Array.isArray(links) &&
         links.map((link: SocialLink, index: number) => (
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
