import * as React from 'react';
import Container from '../Container/Container';
import Row from '../Row/Row';
import Col from "../Col/Col";
import Text from "../Text/Text";
import Button from '../Button/Button';
import {ButtonElementEnum} from "../../types/types";
import BackIcon from "../Icons/BackIcon";

interface ILayoutTitleDateContentProps {
  [prop: string]: any
}

const LayoutTitleDateContent: React.FC<ILayoutTitleDateContentProps> = ({
  children,
  title,
  date,
  bottom
                                                                        }) => {
  return (
    <Container pt={[32,32,48]}>
      <Row mb={[24, 24, 72]}>
        <Col xs={12}>
          <Col mb={[25,25,40]}>
            <Button element={ButtonElementEnum.transparent} mods={['dark', 'icon']}>
              <Col mr={8}>
                <BackIcon/>
              </Col>
              <Text font={'root'} size={'s'} type={'inherit'} as={'span'}>
                Вернуться к списку новостей
              </Text>
            </Button>
          </Col>
          <Text font={'root'} type={'placeholder'} mb={20}>
            {date}
          </Text>
          <Text font={'object'} size={'l'} type={'primary'} className={'text_uppercase'}>
            {title}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col className={'layout-title-date-content_sidebar'}>
          <Text>
            Поделится
          </Text>
        </Col>
        <Col className={'layout-title-date-content_content'}>
          {children}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {bottom}
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutTitleDateContent;
