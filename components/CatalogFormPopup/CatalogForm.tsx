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

interface ICatalogFormProps {
  [prop: string]: any
}

const CatalogForm: React.FC<ICatalogFormProps> = ({onCloseClicked, initialValues,onSubmit,}) => {
  const {t} = useTranslation('common');
  const {t: tHome} = useTranslation('home');

  //
  // const onSubmitA = async (values: any) => {
  //   console.log('values: ', values);
  //   const result = await mutation({
  //     variables: {
  //       feedback: {
  //         email: values.email,
  //         phone: values.email,
  //         form: values.form,
  //         date: new Date().toISOString(),
  //       }
  //     },
  //   }).then((response: any) => response)
  //     .catch((error: any) => {
  //       return error;
  //     });
  //   console.log(result);
  //   onCloseClicked();
  // };

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
              >
                {
                  tHome('section_send-order_form-title')
                }
              </Text>
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Text
                size={'m'}
                font={'root'}
              >
                {
                  tHome('section_send-order_form-description')
                }
              </Text>
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name={'name'}
                type={'text'}
                label={t("form-field_label-fio")}
                render={TextField}
              />
            </Col>
            <Col mb={40} xs={12} sm={12}>
              <Field
                name={'email'}
                label={t("form-field_label-email")}
                type={'email'}
                render={TextField}
              />
            </Col>
            <Col xs={12} mb={32}>
              <Field
                name={'privacy'}
                label={<Text
                  font={'root'}
                  size={'s'}
                >
                  {t('form-privacy_agree')}
                  <a
                    href="/"
                    target={'_blank'}
                    className={'button_link button_link--font-root button_link--decoration'}
                  >
                    {t('form-privacy_link')}
                  </a>
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
