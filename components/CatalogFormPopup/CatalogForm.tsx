import * as React from 'react';
import {useTranslation} from "../../libs/i18n";
import {Field, Form} from "react-final-form";
import Col from "../Col/Col";
import Row from "../Row/Row";
import TextField from "../TextField/TextField";
import Text from "../Text/Text";
import Checkbox from "../Checkbox";
import Button from "../Button/Button";
import {ButtonElementEnum} from "../../types/types";

import SendFeedbackFormHoc from '../../libs/SendFeedbackFormHOC';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

interface ICatalogFormProps {
  [prop: string]: any
}

const CatalogForm: React.FC<ICatalogFormProps> = (
  {
    onCloseClicked,
    initialValues,
    onSubmit,
    title,
    description
  }
) => {
  const {t} = useTranslation('common');
  const {t: tHome} = useTranslation('home');


  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <form className={'section-get-catalog_form'} onSubmit={handleSubmit}>
          <a
            onClick={(event) => {
              event.preventDefault();
              onCloseClicked();
            }}
            href={'!#'}
            style={{
              position: 'absolute',
              width: '56px',
              height: '56px',
            }}
            className="skylight-close-button"
          />

          <Row>
            <Col mb={10} xs={12} sm={12}>
              <Text
                font={'object'}
                size={'m'}
                className={'reset-style text_uppercase'}
              >
                {
                  title && ReactHtmlParser(GetLocalizationString(title)) || tHome('section_send-order_form-title')
                }
              </Text>
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Text
                size={'m'}
                font={'root'}
                className={'reset-style'}
              >
                {
                  title && ReactHtmlParser(GetLocalizationString(description)) ||tHome('section_send-order_form-description')
                }
              </Text>
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name={'name'}
                type={'text'}
                label={t("form-field_label-fio")}
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}
                render={TextField}
              />
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name={'email'}
                label={t("form-field_label-email")}
                type={'email'}
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}
                render={TextField}
              />
            </Col>
            <Col xs={12} mb={32}>
              <Field
                name={'privacy'}
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}
                label={<Text
                  font={'root'}
                  size={'s'}
                >
                  {t('form-privacy_agree')}
                  <Link href="/privacy">
                    <a
                      href="/privacy"
                      target={'_blank'}
                      className={'button_link button_link--font-root button_link--decoration'}
                    >
                      {t('form-privacy_link')}
                    </a>
                  </Link>
                </Text>}
                type={'checkbox'}
                render={Checkbox}
              />
            </Col>
            <Col xs={12}>
              <Button
                element={ButtonElementEnum.primary}
              >
                {t("form-field_submit-get-catalog")}
              </Button>
            </Col>
          </Row>
        </form>
      )}/>)
};

export default SendFeedbackFormHoc(CatalogForm);
