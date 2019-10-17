import * as React from 'react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import Text from '../../components/Text/Text';
import {Departament, Person} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import ContactListStrings from "./ContactListStrings";

interface IContactRoleItemProps extends Departament {
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
          {name && GetLocalizationString(name)}
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
            persons && Array.isArray(persons) && persons.map((item: Person, index) => (<div
              key={index}
            >
              <Text size={'m'} font={'root'}>
                {
                  GetLocalizationString(item.name)
                }
              </Text>
              <Text mb={12} size={'m'} font={'root'} type={'placeholder'}>
                {
                  GetLocalizationString(item.position)
                }
              </Text>
              <Text mb={20} size={'m'} font={'root'}>
                <ContactListStrings
                  typeHref={'tel:'}
                  contacts={item.phones}
                />
                <br/>
                <ContactListStrings
                  typeHref={'mailto:'}
                  contacts={item.emails}
                />
                <br/>
              </Text>
            </div>))
          }

        </div>
      </AnimateHeight>
    </div>
  );
};

export default ContactRoleItem;
