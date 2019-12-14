import React, {Fragment} from 'react'

import SectionNews from '../pageTemplate/HomePage/SectionNews/SectionNews';
import SectionAboutUs from "../pageTemplate/HomePage/SectionAboutUs/SectionAboutUs";
import SectionProjects from '../pageTemplate/HomePage/SectionProjects/SectionProjects';
import SectionGetCatalog from '../pageTemplate/HomePage/SectionGetCatalog/SectionGetCatalog';
import SectionMain from '../pageTemplate/HomePage/SectionMain/SectionMain';
import Head from "../components/Head/Head";
import {
  useLocalizationQuery,
} from "../libs/useLocalizationQuery";
import {
  GetHomePageUKQuery,
  GetHomePageENQuery,
  GetHomePageRUQuery,
} from "../apollo/query/GetHomePageQuery";
import Preloader from "../components/Preloader/Preloader";
import {GetHomePage} from "../types/types";
import {useTranslation} from "react-i18next";


const Homepage = () => {

  const {i18n} = useTranslation();
  const {data, loading} = useLocalizationQuery<GetHomePage>({
    ru: GetHomePageRUQuery,
    en: GetHomePageENQuery,
    uk: GetHomePageUKQuery,
  }, {
    errorPolicy: 'ignore',
    variables:{
      locale: i18n.language,
    }
  });

  console.log('data: ', data);

  if (loading) {
    return (<Preloader/>)
  }
  return (
      <Fragment>
        <Head
          title={'Star Media'}
          seoTags={data && data.getHomePage && data.getHomePage.seoTags}
        />
        <SectionMain
          projectList={data && data.projectPaginationOnMain && data.projectPaginationOnMain.items}
          watchOnline={data && data.getHomePage && data.getHomePage.watchOnline}
          {...(data && data.getHomePage && data.getHomePage.mainSection)}
        />
        <SectionNews
          news={data && data.newsPagination && data.newsPagination.items}
        />
        <SectionAboutUs
          {...(data && data.getHomePage && data.getHomePage.aboutUsSection)}
        />
        <SectionProjects
          projectList={data && data.projectPagination && data.projectPagination.items}
        />
        <SectionGetCatalog
          {...(data && data.getHomePage && data.getHomePage.orderCatalog)}
        />
      </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'home', 'footer', 'common']
});

export default Homepage;
