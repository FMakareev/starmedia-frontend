import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ProjectList from '../pageTemplate/Projects/ProjectList';
import Pagination from "../components/Pagination/Pagination";
import ProjectFilter from '../pageTemplate/Projects/ProjectFilter';
import {withTranslation} from "../libs/i18n";
import {usePaginationQuery} from "../libs/usePaginationQuery";
import {PaginationVariables} from "../types/types";
import {ProjectPaginationRU, ProjectPaginationEN, ProjectPaginationUK} from '../apollo/query/GetProjectQuery';
import {ProjectPagination} from '../types/projectTypes';
import {withRouter} from "next/router";
import Head from "../components/Head/Head";


interface IProjectsProps {
  [prop: string]: any
}

const getDefaultLimitsByWindowWidth = (): number => {
  try {
    if (process.browser) {
      if (window.innerWidth >= 1024) {
        return 12
      } else if (window.innerWidth >= 768) {
        return 9
      }
    }
    return 6
  } catch (e) {
    return 12;
  }
};

const ProjectFilterHOC = (WrapperComponent: any) => class extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.setFilter = this.setFilter.bind(this);
    this.state = this.initialState;
  }

  get initialState() {
    const {query} = this.props.router;
    return {
      genre: query && query.genre || null,
      format: query && query.format || null,
      year: query && typeof query.year === 'string' && parseInt(query.year) || 0,
      query: query && query.query || '',
    }
  }

  setFilter(
    filterOptions: any,
  ) {
    const {push, pathname} = this.props.router;
    this.setState((state: any) => {
      const newValue: any = {};
      let queryString: object = {};

      Object
        .entries(state)
        .map(([key]) => {
          if (!!(filterOptions[key]) || filterOptions[key] === '') {
            newValue[key] = filterOptions[key];
          } else {
            newValue[key] = state[key];
          }
        });

      Object
        .entries(newValue)
        .map(([key, value]) => {
          queryString = !!(value) && value !== '*' ? {...queryString, [key]: value} : queryString;
        });

      push({
        pathname: pathname,
        query: queryString
      });

      return newValue;
    })
  }

  render() {
    return (<WrapperComponent
      filters={this.state}
      setFilter={this.setFilter}
      {...this.props}
    />)
  }
};


const Projects: React.FC<IProjectsProps> = (
  {
    t,
    filters,
    setFilter,
  }
) => {

  const {
    data,
    page,
    loading,
    onFetchMore,
    onPaginationFetchMore,
    calculatePageCount,
    isDisabledPagination,
  } = usePaginationQuery<ProjectPagination, PaginationVariables>({
    queryName: 'projectPagination',
    defaultPage: 1,
    defaultLimit: getDefaultLimitsByWindowWidth(),
    localizationQuery: {
      ru: ProjectPaginationRU,
      en: ProjectPaginationEN,
      uk: ProjectPaginationUK,
    },
    variables: {
      genre: !!(filters.genre) && filters.genre !== '*' ? filters.genre : '',
      format: !!(filters.format) && filters.format !== '*' ? filters.format : '',
      year: !!(filters.year) && filters.year !== '*' ? parseInt(filters.year) : '0',
      query: filters.query || '',
    },
    options: {
      fetchPolicy: 'cache-and-network'
    }
  });

  return (
    <LayoutTitleWithContent
      title={t('nav-project-list')}
    >
      <Head
        seoTags={{}}
        title={t('nav-project-list')}
      />

      <ProjectFilter
        filters={filters}
        setFilters={setFilter}
      />

      {
        data && data.projectPagination && data.projectPagination.items && <ProjectList
					projects={data && data.projectPagination && data.projectPagination.items}
				/>
      }
      {
        data && data.projectPagination
        && Array.isArray(data.projectPagination.items) && (data.projectPagination.items.length > 0) &&
				<Pagination
					disabled={isDisabledPagination()}
					forcePage={page - 1}
					loading={loading}
					onFetchMore={onFetchMore}
					onPageChange={onPaginationFetchMore}
					pageCount={calculatePageCount()}
				/>
      }


    </LayoutTitleWithContent>
  );
};

// @ts-ignore
export default withTranslation(['nav', 'home', 'footer'])(withRouter(ProjectFilterHOC(Projects)));
