import * as React from 'react';
import Container from "../../components/Container/Container";
import ContactMainItem from './ContactMainItem';
import {Contacts, MainContact} from "../../types/types";
import {useTranslation} from "../../libs/i18n";

interface IMainContactsProps extends Contacts {
  [prop: string]: any
}

const BGMap: object = {
  ru: "/static/images/contact-bg-moscow.jpg",
  uk: "/static/images/contact-bg-kiev.jpg",
  en: "/static/images/contact-bg-london.jpg",
};


const MainContacts: React.FC<IMainContactsProps> = (
  {
    mainContacts,
    cityToggle,
    currentCity,
  }
) => {

  const {i18n} = useTranslation();
  return (
    <Container mb={80}>
      <ul className={'contact-main_list'}>
        {
          mainContacts
          && mainContacts.sort((prev: MainContact, next: MainContact) => {

            if(prev.locale && prev.locale.toLowerCase() === i18n.language){
              return -1;
            }
            if(next.locale && next.locale.toLowerCase() === i18n.language){
              return 1;
            }
            if(prev.locale && prev.locale.toLowerCase() === 'ru'){
              return -1;
            }
            if(next.locale && next.locale.toLowerCase() === 'ru'){
              return 1;
            }
            return 0;

          })
            .map((item: MainContact, index: number) =>
              (<ContactMainItem
                {...item}
                isActive={currentCity === index}
                cityToggle={() => {
                  cityToggle(index)
                }}
                key={index}
                // @ts-ignore
                src={item && item.locale && BGMap[item.locale.toLowerCase()]}
              />))
        }
      </ul>
    </Container>
  );
};

export default MainContacts;
