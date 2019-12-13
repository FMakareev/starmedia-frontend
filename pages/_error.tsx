import React from 'react'
import Container from '../components/Container/Container';
import Col from "../components/Col/Col";
import Row from "../components/Row/Row";
import Text from "../components/Text/Text";
import {useTranslation} from "react-i18next";


function Error({statusCode}: any) {
  const {t} = useTranslation();
  return (
    <Container pt={60}>
      <Row>
        <Col xs={12}>
          <Text size={'xl'}>

            {
              statusCode === 404 && <span>
                {t('error-page-404_title')}
              </span>
            }
            {
              statusCode !== 404 && <span>
                {t('error-page_title')}
              </span>
            }


          </Text>
        </Col>
        <Col xs={12}>
          <Text font={'root'} size={'m'}>
            {
              statusCode === 404 && <span>
                {t('error-page-404_description')}
              </span>
            }
            {
              statusCode !== 404 && <span>
                {t('error-page_description')}
              </span>
            }
          </Text>
        </Col>
      </Row>
    </Container>
  )
}

Error.getInitialProps = ({res, err}: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
};

export default Error
