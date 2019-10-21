import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import AwardsList from '../pageTemplate/AboutUs/AwardsList';
import AboutDevelop from '../pageTemplate/AboutUs/AboutDevelop';
import AboutDescription from "../pageTemplate/AboutUs/AboutDescription";
import {useTranslation} from "../libs/i18n";
import Head from "../components/Head/Head";
import {Fragment} from "react";
import {useLocalizationQuery} from "../libs/useLocalizationQuery";
import {GetAboutUsRUQuery, GetAboutUsENQuery, GetAboutUsUKQuery} from '../apollo/query/GetAboutUsQuery';
import {GetAboutUs} from '../types/types';


interface IAboutUsProps {
  [prop: string]: any
}

const AboutUs: React.FC<IAboutUsProps> = () => {
  const {t} = useTranslation('nav');


  const {data} = useLocalizationQuery<GetAboutUs>({
    ru: GetAboutUsRUQuery,
    en: GetAboutUsENQuery,
    uk: GetAboutUsUKQuery,
  });


  return (
    <Fragment>
      <Head
        title={t('nav-about_us')}
        seoTags={data && data.getAboutUsPage && data.getAboutUsPage.seoTags}
      />

      <LayoutTitleWithContent
        titleStyle={{
          mb: 84,
        }}
        title={t('nav-about_us')}
      >

        <AboutDescription
          {...(data && data.getAboutUsPage)}
        />

        <AboutDevelop
          {...(data && data.getAboutUsPage)}
        />


      </LayoutTitleWithContent>
        <LayoutTitleWithContent
          titleStyle={{
            mb: 48,
          }}
          titleAs={'h2'}
          titleId={'awards'}
          title={t('nav-awards')}
        >
          <AwardsList/>
        </LayoutTitleWithContent>
    </Fragment>
  );
};

export default AboutUs;
