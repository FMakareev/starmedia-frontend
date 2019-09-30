import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
import ContactRoleItem from './ContactRoleItem';
import {useAccordion} from "../../libs/useAccordion";


interface IContactRolesProps {
  [prop: string]: any
}





const ContactRoles: React.FC<IContactRolesProps> = () => {
  const {isOpen, toggle} = useAccordion();
  return (
    <Container pt={80} pb={100}>
      <Row>
        <Col xs={12} md={6}>
          <ContactRoleItem
            onClick={() => toggle(0)}
            isOpen={isOpen.includes(0)}
          />
        </Col>
        <Col xs={12} md={6}>
          <ContactRoleItem
            onClick={() => toggle(1)}
            isOpen={isOpen.includes(1)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactRoles;
