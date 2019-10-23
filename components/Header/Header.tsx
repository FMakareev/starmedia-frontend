import * as React from 'react';
import HeaderDesktopTop from "./HeaderDesktopTop";
import HeaderDesktopMenu from './HeaderDesktopMenu';
import classNames from 'classnames';
import {
  useRouter,
  // withRouter
} from "next/router";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetContacts, MainContact} from "../../types/types";
import {GetContactsENQuery, GetContactsRUQuery, GetContactsUKQuery} from "../../apollo/query/GetContactsQuery";
import {useTranslation} from "../../libs/i18n";

interface IHeaderProps {
  [prop: string]: any
}

const gettransparent = (route: string, isActive: boolean): boolean => {

  if ((route === '/' || route === '/project/[slug]') && !isActive) {
    return true;
  }
  return false;
}

const GetContactByCurrentLang = (language: string, data?: GetContacts): MainContact | undefined => {
  if (data && data.getContacts.mainContacts) {
    let result =  data.getContacts.mainContacts.find(
      (contact: MainContact): boolean => typeof contact.locale === 'string' && contact.locale.toLowerCase() === language.toLowerCase());
    if(!result) {
      return data.getContacts.mainContacts.find(
        (contact: MainContact): boolean => typeof contact.locale === 'string' && contact.locale.toLowerCase() === 'ru');
    }
    return  result;
  }
  return undefined;
};

const Header: React.FC<IHeaderProps> = (
  {}
) => {
  const {route} = useRouter();
  const {i18n} = useTranslation();

  const [isActive, setActive] = React.useState(false);
  const [isScroll, setScroll] = React.useState(false);


  const toggleMenu = (_isActive?:boolean) => {
    if(typeof _isActive === "boolean"){
      setActive(_isActive)
    } else {
      setActive(!isActive)
    }
  };
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

  const {data} = useLocalizationQuery<GetContacts>({
    ru: GetContactsRUQuery,
    en: GetContactsENQuery,
    uk: GetContactsUKQuery,
  }, {
    skip: false,
  });
  const contacts = GetContactByCurrentLang(i18n.language, data);

  return (
    <header className={classNames('header', {
      'header--is-scroll': isScroll,
      'header--transparent': gettransparent(route, isActive),
    })}>
      <HeaderDesktopTop
        contact={contacts}
        toggleMenu={toggleMenu}
        isActive={isActive}
      />
      <HeaderDesktopMenu
        contact={contacts}
        // @ts-ignore
        toggleMenu={toggleMenu}
        // @ts-ignore
        isActive={isActive}
      />
    </header>
  );
};

export default Header;
