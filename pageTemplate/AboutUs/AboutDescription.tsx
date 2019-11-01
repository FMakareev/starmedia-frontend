import * as React from 'react';
import Container from "../../components/Container/Container";
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Text from '../../components/Text/Text';
import {ViewportSizeEnum, AboutUs} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";
import Typeset from '../../components/Typeset/Typeset';
import ReactHtmlParser from "react-html-parser";

interface IAboutDescriptionProps extends AboutUs {
  [prop: string]: any
}

const AboutDescription: React.FC<IAboutDescriptionProps> = (
  {
    title,
    content,
    redBabble,
  }
) => {
  const {i18n} = useTranslation();
  return (
    <Container mb={80}>
      <Row mb={40}>
        <Col xs={12}>
          <Text
            size={'xl'}
            font={'object'}
            className={'text_uppercase'}
          >
            {
              GetLocalizationString(title, i18n)
            }

          </Text>
        </Col>
      </Row>
      <Row start={ViewportSizeEnum.xs}>

        <Col xs={12} sm={8}>
          <Col as={'hr'}/>
        </Col>
      </Row>

      <Row between={ViewportSizeEnum.md} middle={ViewportSizeEnum.md}>

        <Col xs={12} md={8} mb={20}>
          <Typeset
            content={GetLocalizationString(content, i18n)}
          />
        </Col>

        <Col xs={12} md={'auto'}>
          <div className="about-description_bubble">
            <Text
              style={{
                maxWidth: '260px',
              }}
              type={'secondary'}
              size={'m'}
              className={'text_uppercase'}
              font={'object'}
              align={'center'}
            >
              {
                ReactHtmlParser(GetLocalizationString(redBabble, i18n))
              }
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutDescription;
