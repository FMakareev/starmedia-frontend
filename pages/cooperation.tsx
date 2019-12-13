import * as React from 'react';
import {Fragment} from "react";
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import CooperationTabs from '../pageTemplate/Cooperation/CooperationTabs';
import {withTranslation} from "../libs/i18n";
import Head from "../components/Head/Head";
import {useLocalizationQuery} from "../libs/useLocalizationQuery";
import Preloader from "../components/Preloader/Preloader";
import {
  GetCooperationUKQuery,
  GetCooperationRUQuery,
  GetCooperationENQuery
} from '../apollo/query/GetCooperationQuery';
import { GetCooperation } from '../types/types';

interface ICooperationProps {
  [prop: string]: any
}

const Cooperation: React.FC<ICooperationProps> = ({t}) => {

  const {data, loading} = useLocalizationQuery<GetCooperation>({
    ru: GetCooperationRUQuery,
    en: GetCooperationENQuery,
    uk: GetCooperationUKQuery,
  });

  if (loading) {
    return (<Preloader/>)
  }

  return (
    <Fragment>
      <Head
        title={t('nav-cooperation')}
        seoTags={{
          description: {
            ru:'Сотрудничество',
            en:'Cooperation page',
            uk:'Сотрудничество',
          },
        }}
      />
      <LayoutTitleWithContent
        titleStyle={{
          mb: 32,
        }}
        title={t('nav-cooperation')}
      >
        <CooperationTabs
          tabs={data && data.getCooperation}
        />
      </LayoutTitleWithContent>
    </Fragment>
  );
};

export default withTranslation(['nav', 'home', 'footer', 'common'])(Cooperation);
