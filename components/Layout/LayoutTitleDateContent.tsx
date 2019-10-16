import * as React from 'react';
import Container from '../Container/Container';
import Row from '../Row/Row';
import Col from "../Col/Col";
import Text from "../Text/Text";
import Button from '../Button/Button';
import {ButtonElementEnum} from "../../types/types";
import BackIcon from "../Icons/BackIcon";
import Link from 'next/link';
import {useTranslation} from "react-i18next";
import dynamic from "next-server/dynamic";

interface ILayoutTitleDateContentProps {
  [prop: string]: any
}
const ShareButton = dynamic(
  () => import('../../components/ShareButton/ShareButton'),
  { ssr: false }
);

const LayoutTitleDateContent: React.FC<ILayoutTitleDateContentProps> = (
  {
    children,
    title,
    date,
    bottom,
    goBackLink,
    goBackLabel
  }
) => {
  const {t} = useTranslation('common');
  return (
    <Container pt={[32, 32, 48]}>
      <Row mb={[30, 30, 72]}>
        <Col xs={12}>
          <Col mb={[24, 24, 40]}>
            <Link href={goBackLink}>
              <Button href={goBackLink} as={'a'} element={ButtonElementEnum.transparent} mods={['dark', 'icon']}>
                <Col mr={8}>
                  <BackIcon/>
                </Col>
                <Text font={'root'} size={'s'} type={'inherit'} as={'span'}>
                  {goBackLabel}
                </Text>
              </Button>
            </Link>
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
          <Text mb={16}>
            {t('project_share')}
          </Text>

          <ShareButton
            horizontal
          />

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
