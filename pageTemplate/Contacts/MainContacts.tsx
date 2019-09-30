import * as React from 'react';
import Container from "../../components/Container/Container";
import ContactMainItem from './ContactMainItem';
import {Contacts, MainContact} from "../../types/types";

interface IMainContactsProps extends Contacts {
  [prop: string]: any
}

const BGMap: object = {
  ru: "/static/images/contact-bg-moscow.jpg",
  uk: "/static/images/contact-bg-kiev.jpg",
  en: "/static/images/contact-bg-london.jpg",
}


const MainContacts: React.FC<IMainContactsProps> = (
  {
    mainContacts
  }
) => {

  return (
    <Container mb={80}>
      <ul className={'contact-main_list'}>
        {
          mainContacts && mainContacts.map((item: MainContact, index: number) =>
            (<ContactMainItem
              {...item}
              key={index}
              // @ts-ignore
              src={item && item.locale && BGMap[item.locale]}
            />))
        }
      </ul>
    </Container>
  );
};

export default MainContacts;
