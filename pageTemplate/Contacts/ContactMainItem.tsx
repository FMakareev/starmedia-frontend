import * as React from 'react';
import Row from "../../components/Row/Row";
import {ViewportSizeEnum} from "../../types/types";
import Col from "../../components/Col/Col";
import Text from "../../components/Text/Text";

interface IContactMainItemProps {
  src?: string,
  cityName?: string,
  phone?: string,
  address?: string,
  email?: string,
  [prop: string]: any
}

const ContactMainItem: React.FC<IContactMainItemProps> = (
  {
    src,
    cityName,
    phone,
    address,
    email,
  }
) => {
  return (
    <li className="contact-main_item">
      <div className="contact-main_item-bg-wrap">
        <img
          className={'contact-main_item-bg-img'}
          src={src}
          alt=""
        />
      </div>
      <Row middle={ViewportSizeEnum.md}>
        <Col md={3}>
          <Text type={'inherit'} className={'text_uppercase'} font={'object'} size={'xl'}>
            {cityName}
          </Text>
        </Col>
        <Col md={3}>
          <Text type={'inherit'} font={'root'} size={'m'}>
            {address}
          </Text>
        </Col>
        <Col md={3}>
          <Text type={'inherit'} font={'root'} size={'m'}>
            {phone}
          </Text>
        </Col>
        <Col md={3}>
          <Text type={'inherit'} font={'root'} size={'m'}>
            {email}
          </Text>
        </Col>
      </Row>
    </li>
  );
};

export default ContactMainItem;
