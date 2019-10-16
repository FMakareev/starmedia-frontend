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
import {useTranslation} from "../../libs/i18n";
import ShowComponentInLocales from '../../components/ShowComponentInLocales/ShowComponentInLocales';
import {SocialLinkTypeEnum} from "../../types/socialLink";

interface IFooterProps {
  [prop: string]: any
}


export const Menu: any[] = [
  {
    href: '/news',
    label: 'nav-news'
  },
  {
    href: '/about-us',
    label: 'nav-about_us'
  },
  {
    href: '/services',
    label: 'nav-services'
  },
  {
    href: '/cooperation',
    label: 'nav-cooperation'
  },
  {
    href: '/contacts',
    label: 'nav-contacts'
  },
];


const Footer: React.FC<IFooterProps> = () => {
  const {t: tNav} = useTranslation('nav');
  const {t: tFooter} = useTranslation('footer');
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
                Menu.map((item, index) => (<li className={'footer_nav-item'} key={index}>
                  <Button
                    className={'text_align-left'}
                    mods={['light', 'm']}
                    element={ButtonElementEnum.link}
                    href={item.href}
                    as={'a'}
                  >
                    {tNav(item.label)}
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
                  href={'/projects'}
                  as={'a'}
                >
                  {tNav("nav-project-list")}
                </Button>
              </li>
              <li className={'footer_nav-item'}>
                <Link
                  href={'/projects?format=films'}
                >
                  <Button
                    className={'text_align-left'}
                    mods={['light', 's']}
                    element={ButtonElementEnum.link}
                    href={'/projects?format=films'}
                    as={'a'}
                  >
                    {tNav("nav-project-films")}
                  </Button>
                </Link>
              </li>
              <li className={'footer_nav-item'}>
                <Link
                  href={'/projects?format=serial'}
                >
                  <Button
                    className={'text_align-left'}
                    mods={['light', 's']}
                    element={ButtonElementEnum.link}
                    href={'item.href'}
                    as={'a'}
                  >
                    {tNav("nav-project-serial")}
                  </Button>
                </Link>
              </li>
              <li className={'footer_nav-item'}>
                <Link
                  href={'/projects?format=telefilm'}
                >
                  <Button
                    className={'text_align-left'}
                    mods={['light', 's']}
                    element={ButtonElementEnum.link}
                    href={'item.href'}
                    as={'a'}
                  >
                    {tNav("nav-project-telefilm")}
                  </Button>
                </Link>
              </li>
            </ul>
            <ShowComponentInLocales locales={['uk']}>
              <Button
                className={'text_align-left'}
                mods={['light', 'm']}
                element={ButtonElementEnum.link}
                href={'http://starmediaschool.com/'}
                as={'a'}
              >
                star media school
                <ExternalLink className={'ml-6'}/>
              </Button>
            </ShowComponentInLocales>

          </Col>
          <Col xs={12} md={3} className={'mb-20'}>
            <Text
              size={'m'}
              font={'root'}
              type={'placeholder'}
              className={'pb-8'}
            >
              {tFooter("we-are-in-social-networks")}
            </Text>
            <SocialLinkList
              exclude={[SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB]}
            />
          </Col>
        </Row>
        <Row lg={'none'} md={'none'}>

          <ShowComponentInLocales locales={['ru']}>
            <Col xs={12} md={3} className={'mb-30'}>
              <img src={require('../../static/images/APKIT_logo.jpg')} alt=""/>
            </Col>
          </ShowComponentInLocales>
          <Col xs={12} md={3} className={'mb-16'}>
            <Link href={'/privacy'}>
              <Button
                as={'a'}
                href={'/privacy'}
                className={'button_link--font-root'}
                mods={['gray', 's']}
                element={ButtonElementEnum.link}
              >
                {tNav('nav-privacy-policy')}
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
            >
              {tFooter('copyright')}
            </Text>
          </Col>
        </Row>
        <Row sm={'none'} xs={'none'}>
          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
            >
              {tFooter('copyright')}
            </Text>
          </Col>
          <Col xs={12} md={3}>
            <Link href={'/privacy'}>
              <Button
                href={'/privacy'}
                as={'a'}
                className={'button_link--font-root'}
                mods={['gray', 's']}
                element={ButtonElementEnum.link}
              >
                {tNav('nav-privacy-policy')}
              </Button>
            </Link>

          </Col>
          <ShowComponentInLocales locales={['ru']}>
            <Col xs={12} md={3}>
              <a href="http://www.rusproducers.com/" target={'_blank'}>
                <img src={require('../../static/images/APKIT_logo.jpg')} alt=""/>
              </a>
            </Col>
          </ShowComponentInLocales>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
