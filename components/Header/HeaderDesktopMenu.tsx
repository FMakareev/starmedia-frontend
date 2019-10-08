import * as React from 'react';
import Container from "../Container/Container";
import Row from "../Row/Row";
import {ButtonElementEnum, MainContact, Maybe, ViewportSizeEnum} from "../../types/types";
import Col from "../Col/Col";
import Button from "../Button/Button";
import HeaderContact from './HeaderContact';
import classNames from 'classnames';
import {SocialLinkListMock} from "../../config";
import SocialLinkList from "../SocialLinkList/SocialLinkList";
import HeaderSearch from "./HeaderSearch";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Link from 'next/link';
import {Menu} from '../../mock';
import {useTranslation} from "../../libs/i18n";

interface IHeaderDesktopMenuProps {
  contact?: Maybe<MainContact>;

  [prop: string]: any
}


const HeaderDesktopMenu: React.FC<IHeaderDesktopMenuProps> = (
  {
    isActive,
    toggleMenu,
    contact,
  }
) => {
  const {t} = useTranslation('nav');
  return (
    <div
      className={classNames("header_menu-wrapper", {
        'header_menu-wrapper--active': isActive,
      })}
    >
      <Container>
        <Col
          lg={'none'}
          md={'none'}
          className={'header_right'}
        >
          <div className="header_search-wrapper">
            <HeaderSearch/>
          </div>
          <div className="header_lang-switcher-wrapper">
            <LangSwitcher/>
          </div>
        </Col>
        <Row
          nowrap={[ViewportSizeEnum.md]}
          between={ViewportSizeEnum.sm}
        >
          <Col className="header_menu-left">
            <ul className="header_menu-list">
              {
                Menu.map((item, index) => (<li
                  key={`menu-${index}`}
                  className="header_menu-item"
                >
                  <Link href={item.href}>
                    <Button
                      aria-label={`menu item`}
                      onClick={toggleMenu}
                      className={'text_align-left'}
                      mods={['l']}
                      element={ButtonElementEnum.link}
                      href={item.href}
                      as={'a'}
                    >
                      {t(item.label)}
                    </Button>
                  </Link>

                </li>))
              }

            </ul>
          </Col>
          <Col className="header_menu-right">
            <HeaderContact
              contact={contact}
            />
          </Col>
          <Col
            xs={12}
            lg={'none'}
            md={'none'}
          >
            <SocialLinkList
              mods={[]}
              links={SocialLinkListMock}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderDesktopMenu;
