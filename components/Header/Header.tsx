import * as React from 'react';
import HeaderDesktopTop from "./HeaderDesktopTop";
import HeaderDesktopMenu from './HeaderDesktopMenu';
import classNames from 'classnames';
import {
  useRouter,
  // withRouter
} from "next/router";

interface IHeaderProps {
  [prop: string]: any
}

const gettransparent = (route: string, isActive: boolean): boolean => {

  if((route === '/' || route === '/project/[slug]') && !isActive){
    return true;
  }
  return false;
}

const Header: React.FC<IHeaderProps> = () => {
  const {route} = useRouter();

  const [isActive, setActive] = React.useState(false);
  const [isScroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      if (window.pageYOffset > 50) {
        if (!isScroll) {
          setScroll(true);
        }
      }
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          if (!isScroll) {
            setScroll(true);
          }
        } else {
          setScroll(false);
        }

      })
    }

  }, []);


  const toggleMenu = () => {
    setActive(!isActive)
  };

  return (
    <header className={classNames('header', {
      'header--is-scroll': isScroll,
      'header--transparent': gettransparent(route,isActive),
    })}>
      <HeaderDesktopTop
        toggleMenu={toggleMenu}
        isActive={isActive}
      />
      <HeaderDesktopMenu
        // @ts-ignore
        toggleMenu={toggleMenu}
        // @ts-ignore
        isActive={isActive}
      />
    </header>
  );
};

export default Header;
