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
import {FormatGQL} from "../../types/projectTypes";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {ExcludeSocialLinkByLocale} from "../../libs/ExcludeSocialLinkByLocale";
import {useGetStarMediaSchoolLink} from '../../apollo/query/GetHomePageQuery';
import {memoSpliceArray} from "../../libs/memoSpliceArray";
import ReactHtmlParser from "react-html-parser";
import {useGetGenresQuery} from "../../apollo/query/GetGenresQuery";

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
  // {
  //   href: '/cooperation',
  //   label: 'nav-cooperation'
  // },
  {
    href: '/contacts',
    label: 'nav-contacts'
  },
];


const Footer: React.FC<IFooterProps> = () => {
  const {t: tNav, i18n} = useTranslation('nav');
  const {t: tFooter} = useTranslation('footer');
  const {data} = useGetGenresQuery();
  const {data: dataSchoolLink} = useGetStarMediaSchoolLink();

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
            <ShowComponentInLocales locales={['uk']}>
              <Button
                className={'text_align-left'}
                mods={['light', 'm']}
                element={ButtonElementEnum.link}
                href={dataSchoolLink && dataSchoolLink.getHomePage && dataSchoolLink.getHomePage.starSchool}
                as={'a'}
              >
                star media school
                <ExternalLink className={'ml-6'}/>
              </Button>
            </ShowComponentInLocales>
          </Col>
          <Col md={3} sm={'none'} xs={'none'}>
            <ul className={'footer_nav-list'}>
              <li style={{marginBottom: '25px'}}  className={'footer_nav-item'}>
                <Link
                  href={`/projects`}
                >
                  <Button
                    className={'text_align-left'}
                    mods={['light', 'm']}
                    element={ButtonElementEnum.link}
                    href={`/projects`}
                    as={'a'}
                  >
                    {
                      tNav('nav-project-list')
                    }
                  </Button>
                </Link>
              </li>
            </ul>
            <ul style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gridTemplateColumns: '1fr 1fr'
            }} className={'footer_nav-list mb-32'}>

              {
                data && data.getGenres && memoSpliceArray(data.getGenres, 0, 6).map((item: FormatGQL, index: number) => (
                  <li style={{marginBottom: '27px'}} key={index} className={'footer_nav-item'}>
                    <Link
                      href={`/projects?genre=${GetLocalizationString(item.name, i18n)}`}
                    >
                      <Button
                        className={'text_align-left'}
                        mods={['light', 's']}
                        element={ButtonElementEnum.link}
                        href={`/projects?genre=${GetLocalizationString(item.name, i18n)}`}
                        as={'a'}
                      >
                        {
                          GetLocalizationString(item.name, i18n)
                        }
                      </Button>
                    </Link>
                  </li>))
              }
            </ul>

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
              exclude={ExcludeSocialLinkByLocale(
                {
                  ru: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB, SocialLinkTypeEnum.TWITTER],
                  en: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK, SocialLinkTypeEnum.TWITTER],
                  uk: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK, SocialLinkTypeEnum.TWITTER],
                },
                i18n
              )}
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
                {
                  ReactHtmlParser(tFooter('privacy-policy'))
                }
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={3}  className={'mb-16'}>
            <Text
              font={'root'}
              type={'placeholder'}
            >
              {
                ReactHtmlParser(tFooter('copyright'))
              }
            </Text>
          </Col>
          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
              style={{display: 'inline'}}
            >
              Сделано в {' '}
            </Text>
            <Link href={'/privacy'}>
              <Button
                target={'_blank'}
                href={'https://expanse.systems/'}
                as={'a'}
                className={'button_link--font-root'}
                mods={['light', 's']}
                element={ButtonElementEnum.link}
              >
                EXPANSE
              </Button>
            </Link>
          </Col>
        </Row>
        <Row sm={'none'} xs={'none'}>
          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
            >
              {
                ReactHtmlParser(tFooter('copyright'))
              }
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
                {
                  ReactHtmlParser(tFooter('privacy-policy'))
                }
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

          <Col xs={12} md={3}>
            <Text
              font={'root'}
              type={'placeholder'}
              style={{display: 'inline'}}
            >
              Сделано в {' '}
            </Text>
            <Link href={'/privacy'}>
              <Button
                target={'_blank'}
                href={'https://expanse.systems/'}
                as={'a'}
                className={'button_link--font-root'}
                mods={['light', 's']}
                element={ButtonElementEnum.link}
              >
               EXPANSE
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
