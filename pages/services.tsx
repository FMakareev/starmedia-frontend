import * as React from 'react';
import Col from "../components/Col/Col";
import Text from '../components/Text/Text';
import Row from '../components/Row/Row';
import Container from "../components/Container/Container";
import ServiceList from '../pageTemplate/ServiceList/ServiceList';
import {useTranslation} from "react-i18next";
import {useLocalizationQuery} from "../libs/useLocalizationQuery";
import {GetServicesRUQuery, GetServicesENQuery, GetServicesUKQuery} from '../apollo/query/GetServicesQuery';
import {GetServices} from "../types/types";
import Head from "../components/Head/Head";
import Preloader from "../components/Preloader/Preloader";

interface IServicesProps {
  [prop: string]: any
}


// @ts-ignore
const Services: React.FC<IServicesProps> = () => {

  const {t} = useTranslation('nav');

  const {data, loading,} = useLocalizationQuery<GetServices>({
    ru: GetServicesRUQuery,
    en: GetServicesENQuery,
    uk: GetServicesUKQuery,
  });

  if (loading) {
    return (<Preloader/>)
  }

  return (
    <Col className={'service_wrapper'} pt={80} pb={100}>
      <Head
        seoTags={data && data.getServices && data.getServices.seoTags}
        title={t('nav-services')}
      />
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

      <ServiceList
        {...data}
      />
    </Col>
  );
};

export default Services;
