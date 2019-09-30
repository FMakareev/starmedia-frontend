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


const CooperationForm: React.FC<ICooperationFormProps> = (
  {
    onSubmit,
    linkLabel,
  }
) => (
  <Form
    onSubmit={() => {
      onSubmit && onSubmit()
    }}
    initialValues={{
      city: {
        label: 'Москва',
        value: 'Москва',
      },
    }}
    validate={validate}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <Row>
          <Col mb={40} xs={12} sm={12}>
            <Field
              name="city"
              placeholder={''}
              styles={{
                container: {
                  width: '100%'
                }
              }}
              options={[
                {
                  label: 'Москва',
                  value: 'Москва',
                },
                {
                  label: 'Киев',
                  value: 'Киев',
                },
                {
                  label: 'Лондон',
                  value: 'Лондон',
                },
              ]}
              render={(props: any) => <Select {...props}/>}
            />
          </Col>
          <Col mb={40} xs={12} sm={6}>
            <Field
              name="fio"
              type={'text'}
              label={'Имя и фамилия'}
              render={TextField}
            />
          </Col>
          <Col mb={40} xs={12} sm={6}>
            <Field
              name="email"
              label={'Email'}
              type={'email'}
              render={TextField}
            />
          </Col>
          <Col mb={40} xs={12} sm={12}>
            <Field
              name="link"
              label={linkLabel}
              type={'url'}
              render={TextField}
            />
          </Col>

          <Col mb={40} xs={12}>
            <Text>
              или
            </Text>
          </Col>

          <Col mb={40} xs={12} sm={12}>
            <Field
              name="link"
              label={'Ваш сценарий в pdf, doc или zip'}
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
                Я согласен с <a
                href="/"
                target={'_blank'}
                className={'button_link button_link--font-root button_link--decoration'}
              >
                условиями обработки персональных данных
              </a>
              </Text>}
              type={'checkbox'}
              render={Checkbox}
            />
          </Col>
          <Col xs={12} md={5}>
            <Button className={'button--full'} element={ButtonElementEnum.primary}>
              Отправить
            </Button>
          </Col>
        </Row>
      </form>
    )}
  />
);

export default CooperationForm;
