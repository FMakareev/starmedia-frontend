import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Pagination from "../components/Pagination/Pagination";
import NewsList from '../pageTemplate/News/NewsList';
import {withTranslation} from '../libs/i18n';
import Head from "../components/Head/Head";
import {Fragment} from "react";

interface INewsProps {
  [prop: string]: any
}

const News: React.FC<INewsProps> = ({t}) => {

  return (
    <Fragment>
      <Head
        title={t('nav-news')}
        seoTags={{
          description: {
            ru: 'Список новостей',
            en: 'News list',
            uk: 'Список новостей',
          },
        }}
      />
      <LayoutTitleWithContent title={t('nav-news')}>
        <NewsList/>

        <Pagination/>

      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default withTranslation(['nav', 'home', 'footer', 'common'])(News);
