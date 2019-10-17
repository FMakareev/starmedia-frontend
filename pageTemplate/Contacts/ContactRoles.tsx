import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
// @ts-ignore
import ContactRoleItem from './ContactRoleItem';
// @ts-ignore
import {useAccordion} from "../../libs/useAccordion";
import {Departament, Contacts} from "../../types/types";


interface IContactRolesProps extends Contacts {

  [prop: string]: any
}


const ContactRoles: React.FC<IContactRolesProps> = (
  {
    mainContacts,
    currentCity,
  }
  ) => {
  const {isOpen, toggle} = useAccordion([]);
  console.log('mainContacts: ', mainContacts);
  console.log('currentCity: ', currentCity);
  return (
    <Container pt={80} pb={100}>
      <Row>
        {
          mainContacts && mainContacts[currentCity]
          && Array.isArray(mainContacts[currentCity].departaments)
          && mainContacts[currentCity].departaments
          && mainContacts[currentCity].departaments.map((item: Departament, index: number) => {
            console.log('item: ', item);
            return (<Col
              key={index}
              xs={12}
              md={6}
            >
              <ContactRoleItem
                {...item}
                onClick={() => toggle(index)}
                isOpen={isOpen.includes(index)}
              />
            </Col>)
          })
        }
      </Row>
    </Container>
  );
};

export default ContactRoles;
