import * as React from 'react';
import Button from '../Button/Button';
import {SocialLinkVariantEnum} from "./SocialLinkList";
import {SocialLink} from "../../types/socialLink";
import classNames from 'classnames';

interface ISocialLinkItemProps extends SocialLink {
  variant?: SocialLinkVariantEnum;

  [prop: string]: any
}

const SocialLinkItem: React.FC<ISocialLinkItemProps> = ({url, mods, shortName, variant}) => {
  return (
    <Button
      aria-label={'social network link'}
      as={'a'}
      className={'social-links_link'}
      mods={mods}
      href={url || '/404'}
      target={'_blank'}
    >
      {
        variant === SocialLinkVariantEnum.icon &&
				<svg
          className={classNames("social-links_icon",`social-links_icon-${shortName && shortName.toLowerCase()}`)}
        >
					<use xlinkHref={`#${shortName && shortName.toLowerCase()}`}/>
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
};
export default SocialLinkItem;
