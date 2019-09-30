import * as React from 'react';
import Container from "../../components/Container/Container";
import ContactMainItem from './ContactMainItem';

interface IMainContactsProps {
  [prop: string]: any
}

const MainContacts: React.FC<IMainContactsProps> = () => {
  return (
    <Container mb={80}>
      <ul className={'contact-main_list'}>
        <ContactMainItem
          cityName={'Москва'}
          phone={'+7 499 356-54-00'}
          email={'office@starmediafilm.com'}
          address={'02222, ул. Закревского, 22'}
          src={"/static/images/contact-bg-moscow.jpg"}
        />
        <ContactMainItem
          cityName={'Киев'}
          phone={'+7 499 356-54-00'}
          email={'office@starmediafilm.com'}
          address={'02222, ул. Закревского, 22'}
          src={"/static/images/contact-bg-kiev.jpg"}
        />
        <ContactMainItem
          cityName={'Лондон'}
          phone={'+7 499 356-54-00'}
          email={'office@starmediafilm.com'}
          address={'02222, ул. Закревского, 22'}
          src={"/static/images/contact-bg-london.jpg"}
        />
      </ul>
    </Container>
  );
};

export default MainContacts;
