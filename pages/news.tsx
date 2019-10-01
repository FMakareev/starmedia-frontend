import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Pagination from "../components/Pagination/Pagination";
import NewsList from '../pageTemplate/News/NewsList';
import {withTranslation} from '../libs/i18n';

interface INewsProps {
  [prop: string]: any
}

const News: React.FC<INewsProps> = ({t}) => {

  return (
    <LayoutTitleWithContent title={t('nav-news')}>

      <NewsList/>

      <Pagination/>

    </LayoutTitleWithContent>
  );
};

export default withTranslation(['nav','home','footer','common'])(News);
