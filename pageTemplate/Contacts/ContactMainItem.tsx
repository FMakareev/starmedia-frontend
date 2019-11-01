import * as React from 'react';
import Row from "../../components/Row/Row";
import {ViewportSizeEnum, MainContact, Address} from "../../types/types";
import Col from "../../components/Col/Col";
import Text from "../../components/Text/Text";
import classNames from 'classnames';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {i18n} from "../../libs/i18n";
import ReactHtmlParser from "react-html-parser";

interface IContactMainItemProps extends MainContact {
  src?: string,

  [prop: string]: any
}

const ContactMainItem: React.FC<IContactMainItemProps> = (
  {
    src,
    name,
    addresses,
    isActive,
    cityToggle,
  }
) => {
  return (
    <li onClick={cityToggle} className={classNames("contact-main_item", {
      'contact-main_item--active': isActive,
    })}>
      <div className="contact-main_item-bg-wrap">
        <img
          className={'contact-main_item-bg-img'}
          src={src}
          alt=""
        />
      </div>
      <Row middle={ViewportSizeEnum.md}>
        <Col xs={12} md={4} mb={[12, '0']}>
          <Text type={'inherit'} className={'text_uppercase'} font={'object'} size={'xl'}>
            {name && GetLocalizationString(name, i18n)}
          </Text>
        </Col>
        <Col xs={12} md={3} mb={[10, '0']}>
          {
            addresses
            && addresses.map((item: Address, index: number) => (<Text
              className={'all-child-inline reset-style'}
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={index < addresses.length - 1? 16:0}
            >
              {item.index}, {
              item
              && ReactHtmlParser(GetLocalizationString(item.addresses, i18n))
            }
            </Text>))
          }
        </Col>
        <Col xs={12} md={2} mb={[10, '0']}>
          {
            addresses
            && addresses.map((item: Address, index: number) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              mb={index < addresses.length - 1? 16:0}
              as={'a'}
              className={'display-block text_ws-nowrap'}
              href={`tel:${item.phone}`}
            >
              {item.phone}
            </Text>))
          }
        </Col>
        <Col xs={12} md={3} mb={[10, '0']}>
          {
            addresses
            && addresses.map((item: Address, index: number) => (<Text
              key={index}
              type={'inherit'}
              font={'root'}
              size={'m'}
              as={'a'}
              mb={index < addresses.length - 1? 16:0}
              className={'display-block text_ws-nowrap'}
              href={`mailto:${item.email}`}
            >
              {item.email}
            </Text>))
          }

        </Col>
      </Row>
    </li>
  );
};

export default ContactMainItem;
