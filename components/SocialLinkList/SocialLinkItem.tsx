import * as React from 'react';
import {SocialLink} from "../../types/types";
import Button from '../Button/Button';
import {SocialLinkVariantEnum} from "./SocialLinkList";

interface ISocialLinkItemProps extends SocialLink {
  variant?: SocialLinkVariantEnum;

  [prop: string]: any
}

const SocialLinkItem: React.FC<ISocialLinkItemProps> = ({url, icon, mods, shortName, variant}) => {
  return (
    <Button className={'social-links_link'} mods={mods} href={url || '/404'} target={'_blank'}>
      {
        variant === SocialLinkVariantEnum.icon &&
				<svg width="24px" height="24px" className="social-links_icon">
					<use xlinkHref={`#${icon}`}/>
				</svg>
      }
      {
        variant === SocialLinkVariantEnum.shortName &&
				<React.Fragment>
          {shortName}
				</React.Fragment>
      }

    </Button>
  );
};
SocialLinkItem.defaultProps = {
  mods: ['light']
}
export default SocialLinkItem;
