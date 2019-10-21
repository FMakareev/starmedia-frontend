import * as React from 'react';
import {useTranslation} from "../../libs/i18n";
import {Field, Form} from "react-final-form";
import Col from "../Col/Col";
import Row from "../Row/Row";
import TextField from "../TextField/TextField";
import Text from "../Text/Text";
import Checkbox from "../Checkbox";
import Button from "../Button/Button";
import {ButtonElementEnum, FormEnum, Forms} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import SendFeedbackFormHoc from "../../libs/SendFeedbackFormHOC";
import Link from 'next/link';
import ReactHtmlParser from "react-html-parser";

interface IServicesFormProps extends Forms {
  [prop: string]: any
}

const ServicesForm: React.FC<IServicesFormProps> = (
  {
    onCloseClicked,
    name,
    description,
    type,
    onSubmit,
    initialValues,
  }
) => {

  const {t} = useTranslation('common');
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
                className={'text_uppercase reset-style'}
              >
                {
                  ReactHtmlParser(GetLocalizationString(name))
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
                  ReactHtmlParser(GetLocalizationString(description))
                }
              </Text>
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name="name"
                type={'text'}
                label={t("form-field_label-fio")}
                render={TextField}
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}
              />
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name="email"
                label={t("form-field_label-email")}
                type={'email'}
                render={TextField}
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}
              />
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name="company"
                label={t("form-field_label-company")}
                type={'text'}
                render={TextField}
              />
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name="position"
                label={t("form-field_label-position")}
                type={'text'}
                render={TextField}
              />
            </Col>

            <Col xs={12} mb={32}>
              <Field
                validate={(value: string) => !value ? t('form-field_validation-required') : undefined}

                name="privacy"
                label={<Text
                  font={'root'}
                  size={'s'}
                >
                  {t('form-privacy_agree')}
                  <Link
                    href="/privacy">
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
                {
                  type === FormEnum.GET_PRESENTATION
                  && t("form-field_submit-get-presentation")
                }
                {
                  type === FormEnum.FREE_TESTING
                  && t("form-field_submit-send-request")
                }

              </Button>
            </Col>
          </Row>
        </form>
      )}/>)
};


export default SendFeedbackFormHoc(ServicesForm);
