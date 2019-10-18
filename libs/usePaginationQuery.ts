import * as React from "react";
import {useLocalizationQuery, UseLocalizationQueryProps} from "./useLocalizationQuery";
import {i18n} from "./i18n";
import {useEffect} from "react";
import memo from 'fast-memoize';


export interface UsePaginationProps {
  page: number,
  limit: number,
}

export const usePagination = ({defaultLimit}: any) => {
  const [state, setState] = React.useState<UsePaginationProps>({
    page: 1,
    limit: defaultLimit,
  });

  return {
    ...state,
    moreData: (page: number) => {
      setState({
        ...state,
        page: page,
      })
    }
  }
};

export interface UsePaginationQueryProps {
  queryName: string,
  defaultLimit: number,
  localizationQuery: UseLocalizationQueryProps,
  variables?: any,
}

// @ts-ignore
const watchChangeVariables = memo((props: any, callback: any) => {
  callback();
  return props;
});

export const usePaginationQuery = <TQuery = any, TVariables = any>(
  {
    queryName,
    defaultLimit,
    localizationQuery,
    variables,
  }: UsePaginationQueryProps
) => {


  const {moreData, page, limit} = usePagination({defaultLimit});


  const {data, loading, fetchMore, updateQuery} = useLocalizationQuery<TQuery, TVariables>(localizationQuery, {
    variables: {
      page: 1,
      limit: defaultLimit,
      ...variables,
    }
  });

  useEffect(() => {
    /** @desc проверяем есть ли данные в кеше если есть то обновляем счетчик пагинации */
    // @ts-ignore
    if (data && data[queryName].items.length) {
      // @ts-ignore
      moreData(Math.ceil(data[queryName].items.length / defaultLimit));
    }

    /**
     * @desc callback function for i18n event listener.
     * after changing the language performs rest page counter and update query,
     * */
    const callbackListener = (lng: string) => {
      if (i18n.language !== lng) {
        moreData(1);
        updateQuery({
          // @ts-ignore
          variables: {
            page: 1,
            limit: defaultLimit,
            ...variables,
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

  /**
   * @param prev
   * @param next
   * @desc
   * */
  const updateQueryInCache = (prev: any, {fetchMoreResult}: any) => {
    if (!fetchMoreResult) return prev;
    return Object.assign({}, {
      [queryName]: {
        pageInfo: fetchMoreResult[queryName].pageInfo,
        count: fetchMoreResult[queryName].count,
        items: [
          ...(prev[queryName].items || []),
          ...(fetchMoreResult[queryName].items || []),
        ],
        __typename: fetchMoreResult[queryName].__typename
      }
    });
  };
  console.log('variables: ', variables);
  if (variables) {
    watchChangeVariables(variables, () => {
      moreData(1);
      void fetchMore({
        variables: {
          page: 1,
          limit,
          ...variables,
        },
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, fetchMoreResult);
        }
      })
    });
  }


  /** @desc function load by click "More" */
  const onFetchMore = () => {
    // @ts-ignore
    if (data && data[queryName] && data[queryName].pageInfo) {
      // @ts-ignore
      if (data[queryName].pageInfo.currentPage < data[queryName].pageInfo.nextPage) {
        moreData(page + 1);
        void fetchMore({
          variables: {
            page: page + 1,
            limit,
            ...variables,
          },
          updateQuery: updateQueryInCache
        })
      }
    }
  };

  /** @desc load pagination data */
  const onPaginationFetchMore = ({selected}: any): void => {
    // @ts-ignore
    if (data && data[queryName] && data[queryName].pageInfo) {
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
        ...variables,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, fetchMoreResult);
      }
    })
  };

  const calculatePageCount = () => {
    // @ts-ignore
    if (data && data[queryName] && data[queryName].pageInfo) {
      // @ts-ignore
      return data[queryName].count / data[queryName].pageInfo.limit;
    }
    return 0;
  };

  const isDisabledPagination = () => {
    // @ts-ignore
    if (data && data[queryName] && data[queryName].pageInfo) {
      // @ts-ignore
      return data[queryName].pageInfo.currentPage === data[queryName].pageInfo.nextPage;
    }
    return false;
  };

  return {
    data,
    page,
    loading,
    onFetchMore,
    onPaginationFetchMore,
    calculatePageCount,
    isDisabledPagination,
  }

};





