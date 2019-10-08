import * as React from 'react';
import Container from "../Container/Container";
import Col from "../Col/Col";
import Text from "../Text/Text";
import SocialLinkList from "../SocialLinkList/SocialLinkList";
import {SocialLinkListMock} from "../../config";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import HeaderLogo from "./HeaderLogo";
import HeaderBurgerButton from './HeaderBurgerButton';
import HeaderSearch from './HeaderSearch';
import { MainContact, Maybe } from '../../types/types';

interface IHeaderDesktopTopProps {
  contact?: Maybe<MainContact>;

  [prop: string]: any
}

const HeaderDesktopTop: React.FC<IHeaderDesktopTopProps> = (
  {
    toggleMenu,
    isActive,
    contact,
  }
) => {

  const phone = contact && contact.phones && contact.phones[0];

  return (
    <Container className={'header_container'}>
      <Col className={'header_left'}>
        <HeaderBurgerButton toggleMenu={toggleMenu} isActive={isActive}/>
        <HeaderLogo/>
      </Col>
      <Col sm={'none'} xs={'none'} className={'header_right'}>
        <Col className="header_phone-wrapper">
          <Text aria-label={'company phone number'} size={'m'} as={'a'} font={'root'} type={'inherit'} href={`tel:${phone}`}>
            {
              phone
            }
          </Text>
        </Col>
        <Col className="header_search-wrapper">
          <HeaderSearch/>
        </Col>

        <Col className="header_social-list-wrapper">
          <SocialLinkList links={SocialLinkListMock}/>
        </Col>
        <div className="header_lang-switcher-wrapper">
          <LangSwitcher/>
        </div>
      </Col>
    </Container>
  );
};

export default HeaderDesktopTop;
