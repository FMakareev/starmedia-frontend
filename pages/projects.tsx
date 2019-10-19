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
import {useRouter} from "next/router";


interface IProjectsProps {
  [prop: string]: any
}

const Projects: React.FC<IProjectsProps> = ({t}) => {

  const {query} = useRouter();

  const [filters, setFilter] = React.useState({
    genre: query && query.genre || null,
    format: query && query.format || null,
    // @ts-ignore
    year: query && parseInt(query.year) || 0,
    search: query && query.search || '',
  });

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
    defaultLimit: 6,
    localizationQuery: {
      ru: ProjectPaginationRU,
      en: ProjectPaginationEN,
      uk: ProjectPaginationUK,
    },
    variables: {
      genre: filters.genre || '',
      format: filters.format|| '',
      year: parseInt(filters.year||0),
      query: filters.search|| '',
    },
  });
  return (
    <LayoutTitleWithContent
      title={t('nav-project-list')}
    >

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
        && Array.isArray(data.projectPagination.items) && (data.projectPagination.items.length > 0) && <Pagination
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

export default withTranslation(['nav', 'home', 'footer'])(Projects);
