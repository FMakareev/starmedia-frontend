import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Pagination from "../components/Pagination/Pagination";
import NewsList from '../pageTemplate/News/NewsList';

interface INewsProps {
  [prop: string]: any
}

const News: React.FC<INewsProps> = () => {
  return (
    <LayoutTitleWithContent title={'Новости'}>

      <NewsList/>

      <Pagination/>

    </LayoutTitleWithContent>
  );
};

export default News;
