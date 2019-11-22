import * as React from 'react';
import Text from '../../../components/Text/Text';
import Container from '../../../components/Container/Container';
import Col from '../../../components/Col/Col';
import Row from '../../../components/Row/Row';
import Button from "../../../components/Button/Button";
import {AboutUsSection, ButtonElementEnum} from "../../../types/types";
import ExternalLink from '../../../components/Icons/ExternalLink';
import {useTranslation} from '../../../libs/i18n';
import Link from 'next/link';
import {GetLocalizationString} from "../../../libs/GetLocalizationString";
import ShowComponentInLocales from "../../../components/ShowComponentInLocales/ShowComponentInLocales";
import ReactHtmlParser from "react-html-parser";
import {useState} from "react";

interface ISectionAboutUsProps extends AboutUsSection {
  [prop: string]: any
}

const SectionAboutUs: React.FC<ISectionAboutUsProps> = (
  {
    title,
  }
) => {
  const [titleIsShow] = useState(true);
  const {t, i18n} = useTranslation('home');

  return (
    <div className={'section-about-us'}>
      <img
        className="section-about-us_video"
        src="/static/images/aboutusBg.jpg"
        alt=""
      />
      {/*<video*/}
      {/*  onLoadedData={()=>{*/}
      {/*    toggleTitle && toggleTitle(false);*/}
      {/*  }}*/}
      {/*  autoPlay*/}
      {/*  loop*/}
      {/*  playsInline*/}
      {/*  muted*/}
      {/*  preload="yes"*/}
      {/*  width={'100%'}*/}
      {/*  height={'100%'}*/}
      {/*  poster={backgroundVideo && backgroundVideo.preview && backgroundVideo.preview.url || '/static/video/f186a09c00195a9368fd7b4d740df086.jpg'}*/}
      {/*  */}
      {/*>*/}
      {/*    <source*/}
      {/*      type="video/mp4"*/}
      {/*      src={*/}
      {/*        backgroundVideo && backgroundVideo.video && backgroundVideo.video.url || '/static/video/10000000_156705418846576_2936494491409534675_n.mp4'*/}
      {/*      }*/}
      {/*    />*/}
      {/*  Your browser does not support the video tag.*/}
      {/*</video>*/}

      <div className="section-about-us_content">
        {
          titleIsShow &&
					<Text as={'h2'} className="section-about-us_title reset-style" size={'l'}>
            {
              ReactHtmlParser(GetLocalizationString(title, i18n))
            }
					</Text>

        }
        <Container className="section-about-us_bottom">
          <Row>
            <Col xs={12} sm={'auto'} mb={16} mr={30}>
              <Link
                href={'/about-us'}
              >
                <Button
                  className={'text_align-left'}
                  mods={['light', 'm']}
                  element={ButtonElementEnum.link}
                  href={'/about-us'}
                  as={'a'}
                >
                  {t('section_about-us_link_history')}
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={'auto'} mb={16} mr={30}>
              <Link
                href={'/about-us/#awards'}
              >
                <Button
                  className={'text_align-left'}
                  mods={['light', 'm']}
                  element={ButtonElementEnum.link}
                  href={'/about-us/#awards'}
                  as={'a'}
                >
                  {t('section_about-us_link_awards')}
                </Button>
              </Link>
            </Col>
            <ShowComponentInLocales locales={['uk']}>
              <Col xs={12} sm={'auto'} mb={16} mr={30}>
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
            </ShowComponentInLocales>
          </Row>
        </Container>
      </div>


    </div>
  );
};

export default SectionAboutUs;
