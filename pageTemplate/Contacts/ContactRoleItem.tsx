import * as React from 'react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import Text from '../../components/Text/Text';
import {Person, Role} from "../../types/types";

interface IContactRoleItemProps extends Role {
  [prop: string]: any
}

const ContactRoleItem: React.FC<IContactRoleItemProps> = (
  {
    onClick,
    isOpen,
    name,
    persons
  }
) => {
  return (
    <div className={classNames('contact-role_item', {
      'contact-role_item--active': isOpen,
    })}>
      <div onClick={onClick} className="contact-role_item-toggle">
        <Text font={'object'} className={'text_uppercase'} size={'xs'}>
          {name && name.ru}
        </Text>
        <div className="contact-role_item-toggle-icon">

        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={isOpen ? 'auto' : 0}
      >
        <div className="contact-role_item-content">


          {
            persons && persons.map((item: Person, index) => (<div
              key={index}
            >
              <Text size={'m'} font={'root'}>
                {item.name && item.name.ru}
              </Text>
              <Text mb={12} size={'m'} font={'root'} type={'placeholder'}>
                {item.position && item.position.ru}
              </Text>
              <Text mb={20} size={'m'} font={'root'}>
                {item.phone && item.phone.ru} <br/>
                {item.email && item.email.ru} <br/>
              </Text>
            </div>))
          }
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ContactRoleItem;
