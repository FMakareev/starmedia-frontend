import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
import ContactRoleItem from './ContactRoleItem';
import {useAccordion} from "../../libs/useAccordion";
import {Contacts, Role} from "../../types/types";


interface IContactRolesProps extends Contacts {
  [prop: string]: any
}





const ContactRoles: React.FC<IContactRolesProps> = ({roles}) => {
  const {isOpen, toggle} = useAccordion();
  return (
    <Container pt={80} pb={100}>
      <Row>
        {
          roles && roles.map((item: Role, index)=>(<Col xs={12} md={6}>
            <ContactRoleItem
              {...item}
              onClick={() => toggle(index)}
              isOpen={isOpen.includes(index)}
            />
          </Col>))
        }
      </Row>
    </Container>
  );
};

export default ContactRoles;
