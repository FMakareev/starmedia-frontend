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


  const departaments: Departament[] = mainContacts && mainContacts[currentCity]
    && Array.isArray(mainContacts[currentCity].departaments)
    && mainContacts[currentCity].departaments
    && mainContacts[currentCity].departaments || [];



  let departamentCols: any[] = departaments.reduce((previousValue: any, currentValue: any, index: any) => {
      if (index % 2 === 1) {
        previousValue[0].push( {
          ...currentValue,
          index
        })
      } else if (index % 2 === 0) {
        previousValue[1].push( {
          ...currentValue,
          index
        })
      }
      return previousValue;
    }, [[], []]);


  departamentCols = departamentCols.sort((prev:any[],next:any[])=>{
    if(prev.length < next.length){
      return 1;
    }
    if(prev.length > next.length){
      return -1;
    }
    return 0;
  });

  return (
    <Container pt={54} pb={36}>
      <Row>
        <Col
          xs={12}
          md={6}
        >
          {
            departamentCols[0] && departamentCols[0].map((item: Departament) => {
              return (<Col
                key={item.index}
                xs={12}
              >
                <ContactRoleItem
                  {...item}
                  onClick={() => toggle(item.index)}
                  isOpen={isOpen.includes(item.index)}
                />
              </Col>)
            })
          }
        </Col>
        <Col
          xs={12}
          md={6}
        >
          {
            departamentCols[1] && departamentCols[1].map((item: Departament) => {
              return (<Col
                key={item.index}
                xs={12}
              >
                <ContactRoleItem
                  {...item}
                  onClick={() => toggle(item.index)}
                  isOpen={isOpen.includes(item.index)}
                />
              </Col>)
            })
          }
        </Col>

      </Row>
    </Container>
  );
};

export default ContactRoles;
