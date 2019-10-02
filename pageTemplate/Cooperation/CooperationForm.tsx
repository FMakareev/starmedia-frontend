import * as React from 'react';
import {Field, Form} from 'react-final-form'
import TextField from '../../components/TextField/TextField';
import Select from "../../components/Select/Select";
import Text from "../../components/Text/Text";
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
import Button from '../../components/Button/Button';
import {ButtonElementEnum} from "../../types/types";
import DropField from "../../components/DropField/DropField";
import DropFieldHoc from "../../components/DropFieldHOC/DropFieldHOC";
import Checkbox from "../../components/Checkbox";
import {useTranslation} from "../../libs/i18n";

interface ICooperationFormProps {
  [prop: string]: any
}

const validate = (value: any) => {

  const errors: any = {};
  if (value && !value.city) {
    errors['city'] = 'обязательно для заполнения';
  }

  return errors;

};

const DropFieldWithHOC = DropFieldHoc(DropField)();



const initialValues = (t:any,language: any) => {

  if(language === 'ru'){
    return {
      city: {
        label: t("city_moscow"),
        value: 'moscow',
      },
    }
  }
  if(language === 'en'){

    return {
      city: {
        label: t("city_london"),
        value: 'london',
      },
    }
  }
  if(language === 'uk'){

    return {
      city: {
        label: t("city_kiev"),
        value: 'kiev',
      },
    }
  }

}

const CooperationForm: React.FC<ICooperationFormProps> = (
  {
    onSubmit,
    linkLabel,
  }
) =>{

  const {t, i18n} = useTranslation('common');

  return  (
    <Form
      onSubmit={() => {
        onSubmit && onSubmit()
      }}
      initialValues={initialValues(t, i18n.language)}
      validate={validate}
      render={({handleSubmit}) => (
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
                render={(props: any) => <Select {...props}/>}
              />
            </Col>
            <Col mb={40} xs={12} sm={6}>
              <Field
                name="fio"
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
                name="link"
                label={t(linkLabel)}
                type={'url'}
                render={TextField}
              />
            </Col>

            <Col mb={40} xs={12}>
              <Text>
                {t("form-or")}
              </Text>
            </Col>

            <Col mb={40} xs={12} sm={12}>
              <Field
                name="link"
                labelOtherFile={t('form-field_label2-file')}
                label={t("form-field_label-file")}
                placeholder={t("form-field_placeholder-file")}
                type={'url'}
                render={(props: any) => <DropFieldWithHOC {...props}/>}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} mb={[20,20,'0']} md={7}>
              <Field
                name="privacy"
                label={<Text
                  font={'root'}
                  size={'s'}
                >
                  {t('form-privacy_agree')}<a
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
            <Col xs={12} md={5}>
              <Button className={'button--full'} element={ButtonElementEnum.primary}>
                {t("form-field_submit")}
              </Button>
            </Col>
          </Row>
        </form>
      )}
    />
  );
}

export default CooperationForm;
