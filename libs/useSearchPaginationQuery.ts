import {useLocalizationQuery, UseLocalizationQueryProps} from "./useLocalizationQuery";
import {default as React, useEffect} from "react";
import {i18n} from "./i18n";
import {SearchPagination, SearchPaginationVariable} from "../types/types";
import {WatchChangeVariables} from "./usePaginationQuery";


export interface UseSearchPaginationProps {
  page: number,
  limit: number,
  searchWord: string | null,
}

export const usePagination = (
  {
    defaultLimit,
    searchWord
  }: any
) => {
  const [state, setState] = React.useState<UseSearchPaginationProps>({
    page: 1,
    limit: defaultLimit,
    searchWord,
  });


  return {
    ...state,
    updatePagination: (searchWord: string) => {
      console.log('updatePagination: ', searchWord);
      setState({
        page: 1,
        limit: defaultLimit,
        searchWord,
      })
    },
    moreData: (page: number) => {
      console.log('moreData: ', page);
      setState({
        ...state,
        page: page,
      })
    }
  }
};

export interface UseSearchPaginationQueryProps {
  defaultLimit: number,
  localizationQuery: UseLocalizationQueryProps,
  searchQuery?: string,
}

export const useSearchPaginationQuery = (
  {
    defaultLimit,
    localizationQuery,
    searchQuery,
  }: UseSearchPaginationQueryProps
) => {

  console.log('searchQuery: ', searchQuery);
  const {
    moreData,
    page,
    limit,
    searchWord,
    updatePagination,
  } = usePagination({defaultLimit, searchWord: searchQuery});

  const {data, loading, fetchMore, updateQuery} = useLocalizationQuery<SearchPagination, SearchPaginationVariable>(localizationQuery, {
    // skip: !searchWord,
    variables: {
      page: 1,
      limit: defaultLimit,
      query: searchWord || '',
    }
  });

  useEffect(() => {
    /**
     * @desc callback function for i18n event listener.
     * after changing the language performs rest page counter and update searchWord,
     * */
    const callbackListener = (lng: string) => {
      if (i18n.language !== lng) {
        updatePagination('');
        updateQuery({
          // @ts-ignore
          variables: {
            page: 1,
            limit: defaultLimit,
            query: '',
          },
        });
      }
    };

    i18n.on('languageChanged', callbackListener);

    /** @desc unsubscribe listener */
    return () => {
      i18n.off('languageChanged', callbackListener);
    }
  }, []);


  /** @desc get page info from object with more count result object */
  const GetPageInfo = () => {
    console.log('');
    if (data && data.search && data.search.projects && data && data.search.news && data && data.search.awards) {
      if (
        data.search.news.count > 0
        && data.search.news.count > data.search.projects.count
        && data.search.news.count > data.search.awards.count
      ) {
        return data.search.news.pageInfo;
      } else if (
        data.search.awards.count > 0
        && data.search.awards.count > data.search.projects.count
        && data.search.awards.count > data.search.news.count
      ) {
        return data.search.awards.pageInfo;
      } else if (
        data.search.projects.count > 0
        && data.search.projects.count > data.search.awards.count
        && data.search.projects.count > data.search.news.count
      ) {
        return data.search.projects.pageInfo;
      }
    }
    return null;
  };

  /** @desc function load by click "More" */
  const onFetchMore = () => {
    const pageInfo = GetPageInfo();
    // @ts-ignore
    if (pageInfo && pageInfo.currentPage < pageInfo.nextPage) {
      moreData(page + 1);

      void fetchMore({
        variables: {
          page: page + 1,
          limit,
          query: searchWord,
        },
        updateQuery: (prev: any, {fetchMoreResult}: any) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, {
            search: {
              awards: {
                pageInfo: fetchMoreResult.search.awards.pageInfo,
                count: fetchMoreResult.search.awards.count,
                items: [
                  ...(prev.search.awards.items || []),
                  ...(fetchMoreResult.search.awards.items || []),
                ],
                __typename: fetchMoreResult.search.awards.__typename
              },
              projects: {
                pageInfo: fetchMoreResult.search.projects.pageInfo,
                count: fetchMoreResult.search.projects.count,
                items: [
                  ...(prev.search.projects.items || []),
                  ...(fetchMoreResult.search.projects.items || []),
                ],
                __typename: fetchMoreResult.search.projects.__typename
              },
              news: {
                pageInfo: fetchMoreResult.search.news.pageInfo,
                count: fetchMoreResult.search.news.count,
                items: [
                  ...(prev.search.news.items || []),
                  ...(fetchMoreResult.search.news.items || []),
                ],
                __typename: fetchMoreResult.search.news.__typename
              },
              __typename: fetchMoreResult.search.__typename
            }
          });
        }
      })
    }
  };


  /** @desc load pagination data */
  const onPaginationFetchMore = ({selected}: any): void => {
    const pageInfo = GetPageInfo();
    // @ts-ignore
    if (pageInfo) {
      // @ts-ignore
      if ((selected + 1) >= calculatePageCount()) {
        return;
      }
    }
    moreData(selected + 1);

    void fetchMore({
      variables: {
        page: selected + 1,
        limit,
        query: searchWord,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, fetchMoreResult);
      }
    })
  };

  /** @desc получить кол-во результатов */
  const getSearchResultCount = (): number => {
    console.log('getSearchResultCount: ', data);
    //@ts-ignore
    if (data && data.search) {
      //@ts-ignore
      return data.search.projects.count + data.search.news.count + data.search.awards.count
    }
    return 0;
  };

  /** @desc get page count  */
  const calculatePageCount = () => {
    // @ts-ignore
    if (data && data.search.projects && data.search.news && data.search.awards) {
      // @ts-ignore
      return (getSearchResultCount() / defaultLimit) / 2;
    }

    return 0;
  };

  /** @desc update  */
  const onUpdateQuery = (searchWord: string) => {
    updatePagination(searchWord);

    updateQuery({
      // @ts-ignore
      variables: {
        page: 1,
        limit: defaultLimit,
        query: searchWord,
      },
    });
  };

  /** @desc   */
  const isDisabledPagination = () => {
    const pageInfo = GetPageInfo();
    // @ts-ignore
    if (pageInfo) {
      // @ts-ignore
      return pageInfo.currentPage === pageInfo.nextPage;
    }
    return false;
  };


  WatchChangeVariables(searchQuery, () => {
    onUpdateQuery && onUpdateQuery(searchQuery || '');
  });

  return {
    searchWord,
    data,
    page,
    loading,
    isDisabledPagination,
    onFetchMore,
    onPaginationFetchMore,
    calculatePageCount,
    getSearchResultCount,
    onUpdateQuery,
  }

};
