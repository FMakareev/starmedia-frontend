import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';

import Container from "../../../components/Container/Container";
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import {ButtonElementEnum, ViewportSizeEnum} from "../../../types/types";
import PdfIcon from "../../../components/Icons/PDFIcon";

// @ts-ignore
import Tilt from 'react-tilt'
import {asyncComponent} from "react-async-component";
import {useTranslation} from "../../../libs/i18n";

interface ISectionGetCatalogProps {
  [prop: string]: any
}
const CatalogFormPopup = asyncComponent({
  resolve: () => import("../../../components/CatalogFormPopup/CatalogFormPopup"),
  serverMode: "defer"
});

const SectionGetCatalog: React.FC<ISectionGetCatalogProps> = () => {

  const [isVisible, togglePopup] = React.useState(false);
  const {t} = useTranslation('home');


  return (
    <div className={'section-get-catalog'}>

      <div className="section-get-catalog_bg">
        <Tilt
          options={{
            max: 10,
            scale: 1,
            reverse: false,
            transition: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          <img
            style={{
              transform: 'scale(1.2)',
            }}
            src={'../../../static/images/Grey bg.jpg'}
            alt=""
          />
        </Tilt>
      </div>

      <Container>
        <Row
          center={ViewportSizeEnum.xs}
          between={ViewportSizeEnum.sm}
          middle={ViewportSizeEnum.sm}
        >
          <Col mb={[44, 0]}>
            <Text className="section-get-catalog_title" size={'l'} type={'secondary'} font={'object'}>

              {
                ReactHtmlParser(t('section_send-order_title'))
              }
            </Text>
          </Col>
          <Col
            className={'section-get-catalog_get-button'}
          >
            <Button
              onClick={()=>{
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
      <CatalogFormPopup
        isVisible={isVisible}
        onClose={() => {
          togglePopup(false);
        }}
      />
    </div>
  );
};

export default SectionGetCatalog;
