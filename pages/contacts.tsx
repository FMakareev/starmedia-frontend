import * as React from 'react';
import ContactRoles from "../pageTemplate/Contacts/ContactRoles";
import MainContacts from '../pageTemplate/Contacts/MainContacts';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import {useTranslation} from "../libs/i18n";
import {
  GetContactsUKQuery,
  GetContactsENQuery,
  GetContactsRUQuery
} from '../apollo/query/GetContactsQuery';
import {GetContacts} from '../types/types';
import {useLocalizationQuery} from "../libs/useLocalizationQuery";
import Head from "../components/Head/Head";
import { Fragment } from 'react';
import Preloader from "../components/Preloader/Preloader";
import dynamic from "next-server/dynamic";

interface IContactsProps {
  [prop: string]: any
}
const ContactMap = dynamic(() => import('../pageTemplate/Contacts/ContactMap'),{
  ssr: false,
});

const Contacts: React.FC<IContactsProps> = () => {

  const {t} = useTranslation('nav');

  const [currentCity, cityToggle] = React.useState<number>(0);
  const {data, loading, error} = useLocalizationQuery<GetContacts>({
    ru: GetContactsRUQuery,
    en: GetContactsENQuery,
    uk: GetContactsUKQuery,
  });


  if (loading) {
    return (<Preloader/>)
  }
  if (error) {
    console.log(error);
    return (<div>Error</div>)
  }

  return (
    <Fragment>
      <Head
        title={t('nav-contacts')}
        seoTags={{
          description: {
            ru:'Страница контактов',
            en:'Contact page',
            uk:'Сторінка контактів',
          },
        }}
      />
      <LayoutTitleWithContent
        titleStyle={{
          mb: 40,
        }}
        title={t('nav-contacts')}>
        <MainContacts
          cityToggle={cityToggle}
          currentCity={currentCity}
          {...(data && data.getContacts ? data.getContacts : {})}
        />
        <ContactMap
          currentCity={currentCity}
          {...(data && data.getContacts ? data.getContacts : {})}
        />
        <ContactRoles
          {...(data && data.getContacts ? data.getContacts : {})}
          currentCity={currentCity}
        />


      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default Contacts;
