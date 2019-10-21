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
// import {goToAnchor, configureAnchors, removeHash } from 'react-scrollable-anchor'
// import {useRouter} from "next/router";

interface IAboutUsProps {
  [prop: string]: any
}

const AboutUs: React.FC<IAboutUsProps> = () => {
  const {t} = useTranslation('nav');
  // const route: any = useRouter();


  const {data} = useLocalizationQuery<GetAboutUs>({
    ru: GetAboutUsRUQuery,
    en: GetAboutUsENQuery,
    uk: GetAboutUsUKQuery,
  });

  // React.useEffect(() => {
  //   configureAnchors({offset: 100, scrollDuration: 1000});
  //
  //   console.log('goToAnchor: ', goToAnchor);
  //   console.log('goToAnchor: ', route.asPath.indexOf('#awards'));
  //   if (route.asPath.indexOf('#awards') > 0) {
  //     removeHash()
  //     console.log('goToAnchor route:  ', route.asPath);
  //     goToAnchor('#awards')
  //   }
  // }, []);

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
