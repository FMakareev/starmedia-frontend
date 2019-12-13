import * as React from "react";
import {useLocalizationQuery, UseLocalizationQueryProps} from "./useLocalizationQuery";
import {i18n} from "./i18n";
import {useEffect} from "react";
import memo from 'fast-memoize';
import {QueryFunctionOptions} from "@apollo/react-common";


export interface UsePaginationProps {
  page: number,
  limit: number,
}

export const usePagination = ({defaultLimit, defaultPage = 1}: any) => {
  const [state, setState] = React.useState<UsePaginationProps>({
    page: defaultPage,
    limit: defaultLimit,
  });
  return {
    ...state,
    resetPagination: () => {
      setState({
        page: 1,
        limit: defaultLimit,
      })
    },
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
  defaultPage?: number,
  localizationQuery: UseLocalizationQueryProps,
  variables?: any,
  options?: QueryFunctionOptions,
}

// @ts-ignore
export const WatchChangeVariables = memo((props: any, callback: any) => {
  callback();
  return props;
});

export const usePaginationQuery = <TQuery = any, TVariables = any>(
  {
    queryName,
    defaultLimit,
    defaultPage,
    localizationQuery,
    variables,
    options,
  }: UsePaginationQueryProps
) => {


  const {moreData, resetPagination, page, limit} = usePagination({defaultLimit, defaultPage});


  const {data, loading, fetchMore, updateQuery} = useLocalizationQuery<TQuery, TVariables>(localizationQuery, {
    variables: {
      page: 1,
      limit: defaultLimit,
      ...variables,
    },
    ...options,
  });

  useEffect(() => {
    /**
     * @desc callback function for i18n event listener.
     * after changing the language performs rest page counter and update query,
     * */
    const callbackListener = () => {
      resetPagination();
      updateQuery({
        // @ts-ignore
        variables: {
          page: 1,
          limit: defaultLimit,
          ...variables,
        },
      });
    };
    i18n.on('languageChanged', callbackListener);
    /** @desc unsubscribe listener */
    return () => {
      resetPagination();
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
  if (variables) {
    WatchChangeVariables(variables, () => {
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
      if (selected >= Math.ceil(calculatePageCount())) {
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





