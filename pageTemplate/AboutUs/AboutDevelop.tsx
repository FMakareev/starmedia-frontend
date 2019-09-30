import * as React from 'react';
import Container from "../../components/Container/Container";
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Text from '../../components/Text/Text';
import {ViewportSizeEnum} from "../../types/types";

interface IAboutDevelopProps {
  [prop: string]: any
}

const AboutDevelop: React.FC<IAboutDevelopProps> = () => {
  return (
    <Container>
      <Row mb={80}>
        <Col xs={12}>
          <Text
            font={'object'}
            size={'m'}
            className={'text_uppercase'}
          >
            развиваем <br/>
            собственное телевещание
          </Text>
        </Col>
      </Row>
      <Row center={ViewportSizeEnum.xs}>
        <Col>
          <div className={'about-develop'}>

            <div className="about-develop_bubble">
              <div className="about-develop_bubble-title">
                телеканал<br/>
                Star Cinema
              </div>
              <div className="about-develop_bubble-text">
                Сериалы и фильмы <br/>
                для широкой аудитории
              </div>
            </div>

            <div className="about-develop_bubble">
              <div className="about-develop_bubble-title">
                телеканал <br/>
                Star Family
              </div>
              <div className="about-develop_bubble-text">
                Сериалы и фильмы <br/> для всей семьи
              </div>
            </div>
            <div className="about-develop_bubble">
              <div className="about-develop_bubble-title">
                телеканал<br/>
                Bolt
              </div>
              <div className="about-develop_bubble-text">
                Для мужской <br/>
                аудитории
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default AboutDevelop;
