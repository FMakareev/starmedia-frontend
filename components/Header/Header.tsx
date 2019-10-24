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
import {MenuConnect} from "../../libs/MenuProvider";




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
  if (data && data.getContacts.mainContacts && language) {
    let result = data.getContacts.mainContacts.find(
      (contact: MainContact): boolean => typeof contact.locale === 'string' && contact.locale.toLowerCase() === language.toLowerCase());
    if (!result) {
      return data.getContacts.mainContacts.find(
        (contact: MainContact): boolean => typeof contact.locale === 'string' && contact.locale.toLowerCase() === 'ru');
    }
    return result;
  }
  return undefined;
};

const Header: React.FC<IHeaderProps> = (
  {
    menuIsActive,
  }
) => {
  const {route} = useRouter();
  const {i18n} = useTranslation();

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
      'header--transparent': gettransparent(route, menuIsActive),
    })}>
      <HeaderDesktopTop
        contact={contacts}
      />
      <HeaderDesktopMenu
        contact={contacts}
      />
    </header>
  );
};

export default MenuConnect(Header);
