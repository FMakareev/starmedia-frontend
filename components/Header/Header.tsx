import * as React from 'react';
import {withTranslation} from '../../libs/i18n'
import HeaderDesktopTop from "./HeaderDesktopTop";
import HeaderDesktopMenu from './HeaderDesktopMenu';
import classNames from 'classnames';

interface IHeaderProps {
  [prop: string]: any
}


const Header: React.FC<IHeaderProps> = () => {

  const [isActive, setActive] = React.useState(false);

  const toggleMenu = () => {
    setActive(!isActive)
  };

  return (
    <header className={classNames('header', {
      'header--transparent': !isActive,
    })}>
      <HeaderDesktopTop
        toggleMenu={toggleMenu}
        isActive={isActive}
      />
      <HeaderDesktopMenu
        isActive={isActive}
      />
    </header>
  );
};

export default withTranslation(['nav'])(Header);
