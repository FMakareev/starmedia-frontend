import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import dynamic from 'next/dynamic'

import Container from "../../../components/Container/Container";
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import {ButtonElementEnum, ViewportSizeEnum, OrderCatalog} from "../../../types/types";
import PdfIcon from "../../../components/Icons/PDFIcon";

import {useTranslation} from "../../../libs/i18n";
import {GetLocalizationString} from "../../../libs/GetLocalizationString";
// @ts-ignore
import {Parallax} from "react-parallax";


interface ISectionGetCatalogProps extends OrderCatalog {
  [prop: string]: any
}

const CatalogFormPopup: any = dynamic(
  () => import("../../../components/CatalogFormPopup/CatalogFormPopup"),
  {ssr: false}
);

const SectionGetCatalog: React.FC<ISectionGetCatalogProps> = (
  {
    title,
    form,
  }
) => {

  const [isVisible, togglePopup] = React.useState(false);
  const {t} = useTranslation('home');

  return (
    <div>
      <Parallax
        bgImage={'../../../static/images/Grey bg.jpg'}
        strength={-100}
      >
        <div className={'section-get-catalog'}>

          <Container>
            <Row
              center={ViewportSizeEnum.xs}
              between={ViewportSizeEnum.sm}
              middle={ViewportSizeEnum.sm}
            >
              <Col xs={12} sm={'auto'} pl={16} mb={[44, 0]}>
                <Text
                  className="section-get-catalog_title reset-style text_uppercase"
                  size={'l'}
                  type={'secondary'}
                  font={'object'}
                >
                  {
                    ReactHtmlParser(GetLocalizationString(title))
                  }
                </Text>
              </Col>
              <Col
                mr={16}
                className={'section-get-catalog_get-button'}
              >
                <Button
                  onClick={() => {
                    togglePopup(true);
                  }}
                  mods={['l']}
                  element={ButtonElementEnum.circle}
                >
                  <PdfIcon
                    className={'mb-20'}
                  />
                  <Text
                    type={'secondary'}
                    font={'object'}
                  >
                    {
                      t('section_send-order_button')
                    }
                  </Text>
                  <Text
                    style={{opacity: '0.7'}}
                    type={'secondary'}
                    font={'object'}
                  >
                    PDF 2,5 Мб
                  </Text>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
      <CatalogFormPopup
        callBack={() => {
          togglePopup(false);
        }}
        form={form}
        isVisible={isVisible}
        onClose={() => {
          togglePopup(false);
        }}
      />
    </div>
  );
};

export default SectionGetCatalog;
