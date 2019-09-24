import * as React from 'react';
import Row from "../Row/Row";
import Col from "../Col/Col";
import Container from "../Container/Container";
import {ButtonElementEnum} from "../../types/types";
import Button from '../Button/Button';

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
        <Row>
          <Col md={3}>

          </Col>
          <Col md={3}>
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
          <Col md={3}>
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
          </Col>
          <Col md={3}>

          </Col>
        </Row>
        <Row>
          <Col md={3}>
            Star Media © 2007 — 2019. <br/>
            Все права защищены
          </Col>
          <Col md={3}>
            Политика <br/>
            конфиденциальности
          </Col>
          <Col md={3}>
            <img src={require('../../static/images/APKIT_logo.jpg')} alt=""/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
