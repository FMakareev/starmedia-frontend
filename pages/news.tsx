import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Pagination from "../components/Pagination/Pagination";
import NewsList from '../pageTemplate/News/NewsList';
import {withTranslation} from '../libs/i18n';
import Head from "../components/Head/Head";
import {Fragment} from "react";
import {usePaginationQuery} from "../libs/usePaginationQuery";
import {PaginationVariables} from "../types/types";
import {NewsPaginationRU, NewsPaginationEN, NewsPaginationUK} from "../apollo/query/GetNewsQuery";
import {NewsPagination} from "../types/newsTypes";
import {useTranslation} from "react-i18next";

interface INewsProps {
  [prop: string]: any
}

const News: React.FC<INewsProps> = ({t}) => {
  const {i18n} = useTranslation();
  const {
    data,
    loading,
    page,
    onFetchMore,
    onPaginationFetchMore,
    calculatePageCount,
    isDisabledPagination,
  } = usePaginationQuery<NewsPagination, PaginationVariables>({
    queryName: 'newsPagination',
    defaultLimit: 4,
    localizationQuery: {
      ru: NewsPaginationRU,
      en: NewsPaginationEN,
      uk: NewsPaginationUK,
    },
    variables: {
      locale: i18n.language,
    }
  });
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
        <NewsList
          data={data && data.newsPagination.items}
        />

        {
          data
          && data.newsPagination.items
          && data.newsPagination.items.length > 0
          && (<Pagination
            disabled={isDisabledPagination()}
            forcePage={page - 1}
            loading={loading}
            onFetchMore={onFetchMore}
            onPageChange={onPaginationFetchMore}
            pageCount={calculatePageCount()}
          />)
        }


      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default withTranslation(['nav', 'home', 'footer', 'common'])(News);
