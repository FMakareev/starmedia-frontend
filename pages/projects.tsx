import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ProjectList from '../pageTemplate/Projects/ProjectList';
import { ProjectsMock } from '../mock';
import Pagination from "../components/Pagination/Pagination";
import ProjectFilter from '../pageTemplate/Projects/ProjectFilter';
import {withTranslation} from "../libs/i18n";
// import {useQuery} from "@apollo/react-hooks";
// import { ProjectPaginationQuery } from '../apollo/query/ProjectPaginationQuery';




interface IProjectsProps {
  [prop: string]: any
}

const Projects: React.FC<IProjectsProps> = ({t}) => {
  // const data = useQuery(ProjectPaginationQuery);
  return (
    <LayoutTitleWithContent
      title={t('nav-project-list')}
    >

      <ProjectFilter/>

      <ProjectList
        projects={ProjectsMock}
      />
      <Pagination/>

    </LayoutTitleWithContent>
  );
};

export default withTranslation(['nav','home','footer'])(Projects);
