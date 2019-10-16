import * as React from 'react';
import LayoutTitleWithContent from '../components/Layout/LayoutTitleWithContent';
import Container from '../components/Container/Container';

import Pagination from "../components/Pagination/Pagination";
import {Trans, useTranslation} from "../libs/i18n";
import Head from "../components/Head/Head";
import {Fragment} from "react";
import SearchHead from '../pageTemplate/Search/SearchHead';
import {useSearchPaginationQuery} from "../libs/useSearchPaginationQuery";
import {SearchQueryRU, SearchQueryEN, SearchQueryUK} from '../apollo/query/SearchQuery';
import Preloader from "../components/Preloader/Preloader";
import SearchResultList from "../pageTemplate/Search/SearchResultList";

interface ISearchProps {
  [prop: string]: any
}

/**
 *
 * @desc
 * */
const Search: React.FC<ISearchProps> = () => {
  const {i18n} = useTranslation('common');
  const {t: tNav} = useTranslation('nav');

  const {
    data,
    loading,
    onUpdateQuery,
    searchWord,
    calculatePageCount,
    page,
    getSearchResultCount,
    onFetchMore,
    onPaginationFetchMore,
    isDisabledPagination,
  } = useSearchPaginationQuery(
    {
      localizationQuery: {
        ru: SearchQueryRU,
        en: SearchQueryEN,
        uk: SearchQueryUK,
      },
      defaultLimit: 2,
    });

  const setValue = (value: string) => {
    onUpdateQuery(value);
  };

  const countSearchResult = getSearchResultCount();

  return (
    <Fragment>
      <Head
        title={tNav('nav-search-result')}
      />
      <LayoutTitleWithContent title={tNav('nav-search-result')}>
        <Container>
          <SearchHead
            value={searchWord}
            setValue={setValue}
            countSearchResult={countSearchResult}
          />
          {
            !loading && countSearchResult === 0 && (<Trans i18n={i18n} i18nKey={'search_not-found'}>
              Нам жаль, но по вашему запросу "<span>{{searchWord}}</span>" ничего не найдено
            </Trans>)
          }
          {
            loading && (<Preloader/>)
          }
          {
            !loading && (<SearchResultList
              searchQuery={searchWord}
              search={data && data.search}
            />)
          }


          {
            !loading && countSearchResult > 0 &&
						<Pagination
							disabled={isDisabledPagination()}
							forcePage={page - 1}
							loading={loading}
							onFetchMore={onFetchMore}
							onPageChange={onPaginationFetchMore}
							pageCount={calculatePageCount()}
						/>
          }

        </Container>

      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default Search;
