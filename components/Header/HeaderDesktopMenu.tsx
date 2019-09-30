import * as React from 'react';
import Container from "../Container/Container";
import Row from "../Row/Row";
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Col from "../Col/Col";
import Button from "../Button/Button";
import HeaderContact from './HeaderContact';
import classNames from 'classnames';
import {SocialLinkListMock} from "../../config";
import SocialLinkList from "../SocialLinkList/SocialLinkList";
import HeaderSearch from "./HeaderSearch";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Link from 'next/link';

interface IHeaderDesktopMenuProps {
  [prop: string]: any
}

const Menu: any[] = [
  {
    href: '/projects',
    label: 'Проекты'
  },
  {
    href: '/news',
    label: 'Новости'
  },
  {
    href: '/about-us',
    label: 'О компании'
  },
  {
    href: '/services',
    label: 'Услуги'
  },
  {
    href: '/',
    label: 'Сотрудничество'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  },
];

const HeaderDesktopMenu: React.FC<IHeaderDesktopMenuProps> = ({isActive,toggleMenu}) => {
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
          <Col  className="header_menu-left">
            <ul className="header_menu-list">
              {
                Menu.map((item, index) => (<li
                  key={`menu-${index}`}
                  className="header_menu-item"
                >
                  <Link href={item.href}>
                    <Button
                      onClick={toggleMenu}
                      className={'text_align-left'}
                      mods={['l']}
                      element={ButtonElementEnum.link}
                      href={item.href}
                      as={'a'}
                    >
                      {item.label}
                    </Button>
                  </Link>

                </li>))
              }

            </ul>
          </Col>
          <Col className="header_menu-right">
            <HeaderContact/>
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
