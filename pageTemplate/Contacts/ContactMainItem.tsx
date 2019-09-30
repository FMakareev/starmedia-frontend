import * as React from 'react';
import Row from "../../components/Row/Row";
import {ViewportSizeEnum, MainContact, LocalizedString} from "../../types/types";
import Col from "../../components/Col/Col";
import Text from "../../components/Text/Text";

interface IContactMainItemProps extends MainContact {
  src?: string,

  [prop: string]: any
}

const ContactMainItem: React.FC<IContactMainItemProps> = (
  {
    src,
    name,
    phones,
    addresses,
    emails,
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
        <Col xs={12} md={4} mb={[12,'0']}>
          <Text type={'inherit'} className={'text_uppercase'} font={'object'} size={'xl'}>
            {name && name.ru}
          </Text>
        </Col>
        <Col xs={12} md={3} mb={[10,'0']}>
          {
            addresses && addresses.map((item:LocalizedString, index) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={8}
            >
              {item && item.ru}
            </Text>))
          }

        </Col>
        <Col xs={12} md={2} mb={[10,'0']}>
          {
            phones && phones.map((item:LocalizedString, index) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={8}
            >
              {item && item.ru}
            </Text>))
          }
        </Col>
        <Col xs={12}  md={3} mb={[10,'0']}>
          {
            emails && emails.map((item:LocalizedString, index) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
            >
              {item && item.ru}
            </Text>))
          }
        </Col>
      </Row>
    </li>
  );
};

export default ContactMainItem;
