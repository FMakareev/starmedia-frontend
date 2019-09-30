import * as React from 'react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import Text from '../../components/Text/Text';

interface IContactRoleItemProps {
  [prop: string]: any
}

const ContactRoleItem: React.FC<IContactRoleItemProps> = ({onClick,
                                                            isOpen}) => {
  return (
    <div className={classNames('contact-role_item', {
      'contact-role_item--active': isOpen,
    })}>
      <div onClick={onClick} className="contact-role_item-toggle">
        <Text font={'object'} className={'text_uppercase'} size={'xs'}>
          Департамент международных проектов
        </Text>
        <div className="contact-role_item-toggle-icon">

        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={isOpen ? 'auto' : 0}
      >
        <div className="contact-role_item-content">
          Мария Гречишникова <br/>
          Вице-президент по продажам и международным проектам
          <br/>
          +7 915 123-45-67 <br/>
          +7 499 356-54-00 (доб. 1224) <br/>
          m.grechishnikova@starmediafilm.com <br/>
          <br/>
          Надежда Рехтер <br/>
          Руководитель отдела международных проектов <br/>
          +7 499 356-54- 00 (доб. 1252) <br/>
          n.rekhter@starmediafilm.com <br/>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ContactRoleItem;
