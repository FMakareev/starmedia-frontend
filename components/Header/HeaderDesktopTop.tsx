import * as React from 'react';
import Container from "../Container/Container";
import Col from "../Col/Col";
import Text from "../Text/Text";
import SocialLinkList from "../SocialLinkList/SocialLinkList";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import HeaderLogo from "./HeaderLogo";
import HeaderBurgerButton from './HeaderBurgerButton';
import HeaderSearch from './HeaderSearch';
import {MainContact, Maybe} from '../../types/types';
import {SocialLinkTypeEnum} from "../../types/socialLink";
// @ts-ignore
import Row from '../../components/Row/Row';
import {ExcludeSocialLinkByLocale} from "../../libs/ExcludeSocialLinkByLocale";
import {useTranslation} from "react-i18next";
import {MenuConnect} from "../../libs/MenuProvider";

interface IHeaderDesktopTopProps {
  contact?: Maybe<MainContact>;

  [prop: string]: any
}

const HeaderDesktopTop: React.FC<IHeaderDesktopTopProps> = (
  {
    toggleMenu,
    contact,
    menuIsActive,
  }
) => {

  const phone = contact && contact.addresses && contact.addresses[0]&& contact.addresses[0].phone;
  const {i18n} = useTranslation();
  return (
    <Container className={'header_container'}>
      <Col className={'header_left'}>
        <HeaderBurgerButton toggleMenu={toggleMenu} isActive={menuIsActive}/>
        <HeaderLogo/>
      </Col>
      <Col sm={'none'} xs={'none'} className={'header_right'}>
        <Col className="header_phone-wrapper">
          <Text aria-label={'company phone number'} size={'m'} as={'a'} font={'root'} type={'inherit'}
                href={`tel:${phone}`}>
            {
              phone
            }
          </Text>
        </Col>
        <Col className="header_search-wrapper">
          <HeaderSearch
            phone={phone}
            toggleMenu={toggleMenu}
          />
        </Col>

        <Row  className="header_right-right">
          <Col className="header_social-list-wrapper">
            <SocialLinkList
              exclude={ExcludeSocialLinkByLocale(
                {
                  ru: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB, SocialLinkTypeEnum.TWITTER],
                  en: [SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK],
                  uk: [SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK],
                },
                i18n
              )}
            />
          </Col>
          <div className="header_lang-switcher-wrapper">
            <LangSwitcher/>
          </div>
        </Row>

      </Col>
    </Container>
  );
};

export default MenuConnect(HeaderDesktopTop);
