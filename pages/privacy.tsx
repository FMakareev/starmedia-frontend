import React, {Fragment} from 'react'
import "flexboxgrid";
import "../style/style.scss";
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Row from '../components/Row/Row';
import Container from '../components/Container/Container';
import Col from '../components/Col/Col';
import {useTranslation} from "../libs/i18n";
import Head from "../components/Head/Head";
import {useLocalizationQuery} from "../libs/useLocalizationQuery";
import {GetPrivacyPolicyENQuery, GetPrivacyPolicyRUQuery, GetPrivacyPolicyUKQuery} from '../apollo/query/GetPrivacyPolicy';
import { GetPrivacyPolicy } from '../types/types';
import Preloader from "../components/Preloader/Preloader";
import Typeset from '../components/Typeset/Typeset';

const Privacy = () => {

  const {t, i18n} = useTranslation('nav');

  const {data, loading} = useLocalizationQuery<GetPrivacyPolicy>({
    ru: GetPrivacyPolicyRUQuery,
    en: GetPrivacyPolicyENQuery,
    uk: GetPrivacyPolicyUKQuery,
  });
  if (loading) {
    return (<Preloader/>)
  }

  return (
    <Fragment>
      <Head
        seoTags={data && data.getPrivacyPolicy && data.getPrivacyPolicy.seoTags}
        title={t('nav-privacy-policy')}
      />
      <LayoutTitleWithContent title={t('nav-privacy-policy')}>
        <Container pt={[16, 16, 32]}>
          <Row>
            <Col xs={12}>
              <Typeset
                content={data &&
                data.getPrivacyPolicy &&
                // @ts-ignore
                (i18n.language in data.getPrivacyPolicy.content) &&
                // @ts-ignore
                data.getPrivacyPolicy.content[i18n.language]}
              />
            </Col>
          </Row>
        </Container>
      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default Privacy

