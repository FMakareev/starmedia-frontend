import * as React from 'react';
import {Field, Form} from 'react-final-form'
import TextField from '../../components/TextField/TextField';
import Text from "../../components/Text/Text";
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
import Button from '../../components/Button/Button';
import {ButtonElementEnum} from "../../types/types";
import DropField from "../../components/DropField/DropField";
import DropFieldHoc from "../../components/DropFieldHOC/DropFieldHOC";
import Checkbox from "../../components/Checkbox";
import {useTranslation} from "../../libs/i18n";
import Link from "next/link";
import dynamic from 'next/dynamic';
import SendFeedbackFormHoc from "../../libs/SendFeedbackFormHOC";

interface ICooperationFormProps {
  [prop: string]: any
}

const DropFieldWithHOC = DropFieldHoc(DropField)();

const SelectSlim = dynamic(() => import("../../components/SelectSlim/SelectSlim"), {
  ssr: false,
});


const initialValues = (language: any) => {

  if (language === 'ru') {
    return {
      city: 'moscow',
    }
  }
  if (language === 'en') {

    return {
      city: 'london',
    }
  }
  if (language === 'uk') {

    return {
      city: 'kiev',
    }
  }

}


const CooperationForm: React.FC<ICooperationFormProps> = (
  {
    onSubmit,
    linkLabel,
    forms,
  }
) => {
  const {t, i18n} = useTranslation('common');

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        ...initialValues(i18n.language),
        url: null,
        file: null,
        form: forms && forms.id,
      }}
      validate={(value: any) => {
        const errors: any = {};

        if(!value.name){
          errors.name = t('form-field_validation-required');
        }

        if(!value.email){
          errors.email = t('form-field_validation-required');
        }

        if(!value.privacy){
          errors.privacy = t('form-field_validation-required');
        }

        if(!value.file && !value.url){
          errors.url = t('form-field_validation-required-file-url');
        }
        return errors;
      }}
      render={({handleSubmit}) => {

        return (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col mb={40} xs={12} sm={12}>
                <Field
                  name="city"
                  label={t("form-field_label-city")}
                  placeholder={' '}
                  styles={{
                    container: {
                      width: '100%'
                    }
                  }}
                  options={[
                    {
                      label: t("city_moscow"),
                      value: 'moscow',
                    },
                    {
                      label: t("city_kiev"),
                      value: 'kiev',
                    },
                    {
                      label: t("city_london"),
                      value: 'london',
                    },
                  ]}
                  render={(props: any) => <SelectSlim {...props}/>}
                />
              </Col>
              <Col mb={40} xs={12} sm={6}>
                <Field
                  name="name"
                  type={'text'}
                  label={t("form-field_label-fio")}
                  render={TextField}
                />
              </Col>
              <Col mb={40} xs={12} sm={6}>
                <Field
                  name="email"
                  label={t("form-field_label-email")}
                  type={'email'}
                  render={TextField}
                />
              </Col>
              <Col mb={40} xs={12} sm={12}>
                <Field
                  name="url"
                  label={t(linkLabel)}
                  type={'url'}
                  render={TextField}
                />
              </Col>

              <Col mb={40} xs={12}>
                <Text font={'root'}>
                  {t("form-or")}
                </Text>
              </Col>

              <Col style={{overflow: 'hidden'}} mb={40} xs={12} sm={12}>
                <Field
                  name="file"
                  labelOtherFile={t('form-field_label2-file')}
                  label={t("form-field_label-file")}
                  placeholder={t("form-field_placeholder-file")}
                  type={'file'}
                  render={(props: any) => <DropFieldWithHOC {...props}/>}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} mb={[20, 20, 20, '0']} lg={7}>
                <Field
                  name="privacy"
                  label={<Text
                    font={'root'}
                    size={'s'}
                  >
                    {t('form-privacy_agree')} <Link href={'/privacy'}>
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
              <Col xs={12} lg={5}>
                <Button className={'button--full'} element={ButtonElementEnum.primary}>
                  {t("form-field_submit")}
                </Button>
              </Col>
            </Row>
          </form>
        )
      }}
    />
  );
};

export default SendFeedbackFormHoc(CooperationForm);
