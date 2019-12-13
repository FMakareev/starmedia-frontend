import * as React from 'react';
import Container from "../../components/Container/Container";
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import {AboutUs, ViewportSizeEnum, AboutUsBabble} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";
import ReactHtmlParser from "react-html-parser";

interface IAboutDevelopProps extends AboutUs {
  [prop: string]: any
}
// @ts-ignore
const Icon: any = [
  "/static/images/iconsTV/star-cinema-icon.png",
  "/static/images/iconsTV/star-family-icon.png",
  "/static/images/iconsTV/bold-icon.png",
];


const AboutDevelop: React.FC<IAboutDevelopProps> = (
  {
    titleTVBroadcast,
    titleTVBroadcastBabbles,
  }
) => {
  const {i18n} = useTranslation();
  return (
    <Container>
      <Row mb={80}>
        <Col xs={12}>
          <Text
            font={'object'}
            size={'m'}
            className={'text_uppercase reset-style'}
          >
            {
              ReactHtmlParser(GetLocalizationString(titleTVBroadcast, i18n))
            }
          </Text>
        </Col>
      </Row>
      <Row center={ViewportSizeEnum.xs}>
        <Col>
          <div className={'about-develop'}>

            {
              titleTVBroadcastBabbles
              && titleTVBroadcastBabbles
                .map((item: AboutUsBabble, index: number) => {

                  if (index < 3) {
                    return (<div
                      className="about-develop_bubble"
                      key={index}
                    >
                      <div className="about-develop_bubble-title reset-style">
                        <img src={Icon[index]} alt=""/>
                        {/*{*/}
                        {/*  ReactHtmlParser(GetLocalizationString(item.title, i18n))*/}
                        {/*}*/}
                      </div>
                      <div className="about-develop_bubble-text reset-style">
                        {
                          ReactHtmlParser(GetLocalizationString(item.content, i18n))
                        }
                      </div>
                    </div>)
                  }
                  return null;
                })
            }
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default AboutDevelop;
