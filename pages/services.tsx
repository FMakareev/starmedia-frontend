import * as React from 'react';
import Col from "../components/Col/Col";
import Text from '../components/Text/Text';
import Row from '../components/Row/Row';
import Container from "../components/Container/Container";
import ServiceList from '../pageTemplate/ServiceList/ServiceList';
import {useTranslation} from "react-i18next";

interface IServicesProps {
  [prop: string]: any
}


const Services: React.FC<IServicesProps> = () => {

  const {t} = useTranslation('nav');

  return (
    <Col className={'service_wrapper'} pt={80} pb={100}>

      <Container mb={40}>
        <Row>
          <Col xs={12}>
            <Text
              as={'h1'}
              font={'object'}
              size={'l'}
              className={'text_uppercase'}
            >
              {t('nav-services')}
            </Text>
          </Col>
        </Row>
      </Container>

      <ServiceList/>
    </Col>
  );
};

export default Services;
