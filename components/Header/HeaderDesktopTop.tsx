import * as React from 'react';
import Container from "../Container/Container";
import Row from "../Row/Row";
import {ViewportSizeEnum} from "../../types/types";
import Col from "../Col/Col";
import Text from "../Text/Text";
import SocialLinkList from "../SocialLinkList/SocialLinkList";
import {SocialLinkListMock} from "../../config";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import HeaderLogo from "./HeaderLogo";
import HeaderBurgerButton from './HeaderBurgerButton';
import HeaderSearch from './HeaderSearch';

interface IHeaderDesktopTopProps {
  [prop: string]: any
}

const HeaderDesktopTop: React.FC<IHeaderDesktopTopProps> = ({toggleMenu,isActive}) => {
  return (
    <Container className={'header_container'}>
      <Row nowrap={[ViewportSizeEnum.md]} between={ViewportSizeEnum.sm}>
        <Col className={'header_left'}>
          <HeaderBurgerButton toggleMenu={toggleMenu} isActive={isActive} />
          <HeaderLogo/>
        </Col>
        <Col sm={'none'} xs={'none'}  className={'header_right'}>
          <Col className="header_phone-wrapper">
            <Text size={'m'} as={'a'} font={'root'} type={'inherit'} href={'tel:+74993565400'}>
              +7 499 356-54-00
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
      </Row>
    </Container>
  );
};

export default HeaderDesktopTop;
