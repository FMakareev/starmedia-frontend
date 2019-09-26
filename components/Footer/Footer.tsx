import * as React from 'react';
import Row from "../Row/Row";
import Col from "../Col/Col";
import Container from "../Container/Container";
import {ButtonElementEnum} from "../../types/types";
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Link from "next/link";
import Text from "../Text/Text";
import ExternalLink from '../Icons/ExternalLink';
import SocialLinkList from '../SocialLinkList/SocialLinkList';
import {SocialLinkListMock} from "../../config";

interface IFooterProps {
  [prop: string]: any
}


const MenuListFirst: any[] = [
  {
    title: 'Новости',
    href: '',
  },
  {
    title: 'О компании',
    href: '',
  },
  {
    title: 'Услуги',
    href: '',
  },
  {
    title: 'Сотрудничество',
    href: '',
  },
  {
    title: 'Контакты',
    href: '',
  },
];




const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className={'footer'}>
      <Container>
        <Row className={'mb-md-36 mb-lg-36'}>
          <Col md={3} sm={'none'} xs={'none'}>
            <Logo width={'72px'} height={'52px'}/>
          </Col>
          <Col xs={12} md={3}>
            <ul className={'footer_nav-list'}>
              {
                MenuListFirst.map((item, index) => (<li className={'footer_nav-item'} key={index}>
                  <Button
                    className={'text_align-left'}
                    mods={['light', 'm']}
                    element={ButtonElementEnum.link}
                    href={item.href}
                    as={'a'}
                  >
                    {item.title}
                  </Button>
                </li>))
              }
            </ul>
          </Col>
          <Col md={3} sm={'none'} xs={'none'}>
            <ul className={'footer_nav-list'}>
              <li className={'footer_nav-item'}>
                <Button
                  className={'text_align-left'}
                  mods={['light', 'm']}
                  element={ButtonElementEnum.link}
                  href={'item.href'}
                  as={'a'}
                >
                  проекты
                </Button>
              </li>
              <li className={'footer_nav-item'}>
                <Button
                  className={'text_align-left'}
                  mods={['light', 's']}
                  element={ButtonElementEnum.link}
                  href={'item.href'}
                  as={'a'}
                >
                  Фильмы
                </Button>
              </li>
              <li className={'footer_nav-item'}>
                <Button
                  className={'text_align-left'}
                  mods={['light', 's']}
                  element={ButtonElementEnum.link}
                  href={'item.href'}
                  as={'a'}
                >
                  Сериалы
                </Button>
              </li>
              <li className={'footer_nav-item'}>
                <Button
                  className={'text_align-left'}
                  mods={['light', 's']}
                  element={ButtonElementEnum.link}
                  href={'item.href'}
                  as={'a'}
                >
                  Телепроекты
                </Button>
              </li>
            </ul>
            <Button
              className={'text_align-left'}
              mods={['light', 'm']}
              element={ButtonElementEnum.link}
              href={'item.href'}
              as={'a'}
            >
              star media school
              <ExternalLink className={'ml-6'}/>
            </Button>
          </Col>
          <Col xs={12} md={3} className={'mb-20'}>
            <Text
              size={'m'}
              font={'root'}
              type={'placeholder'}
              className={'pb-8'}
            >
              Мы в соцсетях
            </Text>
            <SocialLinkList
              links={SocialLinkListMock}
            />
          </Col>
        </Row>
        <Row lg={'none'} md={'none'}>
          <Col xs={12} md={3} className={'mb-30'}>
            <img src={require('../../static/images/APKIT_logo.jpg')} alt=""/>
          </Col>
          <Col xs={12} md={3} className={'mb-16'}>
            <Link href={'/privacy'}>
              <Button
                as={'a'}
                className={'button_link--font-root'}
                mods={['gray', 's']}
                element={ButtonElementEnum.link}
              >
                Политика конфиденциальности
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={3} >
            <Text
              font={'root'}
              type={'placeholder'}
            >
              Star Media © 2007 — 2019. Все права защищены
            </Text>
          </Col>
        </Row>
        <Row sm={'none'} xs={'none'}>
          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
            >
              Star Media © 2007 — 2019. <br/>
              Все права защищены
            </Text>
          </Col>
          <Col xs={12} md={3}>
            <Link href={'/privacy'}>
              <Button
                as={'a'}
                className={'button_link--font-root'}
                mods={['gray', 's']}
                element={ButtonElementEnum.link}
              >
                Политика <br/>
                конфиденциальности
              </Button>
            </Link>

          </Col>
          <Col xs={12} md={3}>
            <img src={require('../../static/images/APKIT_logo.jpg')} alt=""/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
