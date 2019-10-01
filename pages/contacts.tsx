import * as React from 'react';
import ContactRoles from "../pageTemplate/Contacts/ContactRoles";
import MainContacts from '../pageTemplate/Contacts/MainContacts';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ContactMap from "../pageTemplate/Contacts/ContactMap";
import { ContactsMock } from '../mock';
import {useTranslation} from "../libs/i18n";

interface IContactsProps {
  [prop: string]: any
}

const Contacts: React.FC<IContactsProps> = () => {
  const {t} = useTranslation('nav');

  return (
    <LayoutTitleWithContent
      titleStyle={{
        mb: 32,
      }}
      title={t('nav-contacts')}>

      <MainContacts {...ContactsMock}/>
      <ContactMap {...ContactsMock}/>
      <ContactRoles {...ContactsMock}/>


    </LayoutTitleWithContent>
  );
};

export default Contacts;
