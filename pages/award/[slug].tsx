import * as React from 'react';
import {Fragment} from "react";
import LayoutTitleDateContent from '../../components/Layout/LayoutTitleDateContent';
import {useTranslation} from "../../libs/i18n";
import {GetAwardRUQuery, GetAwardUKQuery, GetAwardENQuery} from '../../apollo/query/GetAwardQuery';
import {useRouter} from "next/router";
import {GetAward} from '../../types/awardsTypes';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import Preloader from "../../components/Preloader/Preloader";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import Head from "../../components/Head/Head";
import {DateFormat} from "../../libs/DateFormat";
import Typeset from '../../components/Typeset/Typeset';
import {isBrowser} from "../../libs/isBrowser/isBrowser";


const AwardDetail = () => {
  const {t} = useTranslation('common');

  const {query, push} = useRouter();

  const {data, loading} = useLocalizationQuery<GetAward>({
    ru: GetAwardRUQuery,
    en: GetAwardENQuery,
    uk: GetAwardUKQuery,
  }, {
    variables: {
      slug: query.slug,
    },
  });

  const title = GetLocalizationString(data && data.getAward.name);
  const content = GetLocalizationString(data && data.getAward.content);


  if (loading) {
    return <Preloader/>
  }

  if(!content || content && content.indexOf('None') >= 0){
    if(isBrowser){
      void push('/about-us');
    }
    return null;
  }

  return (
   <Fragment>
     <Head
       seoTags={data && data.getAward.seoTags}
       title={title}
     />
     <LayoutTitleDateContent
       title={title}
       date={data && DateFormat(data.getAward.date || '')}
       goBackLabel={t('awards_go-back')}
       goBackLink={'/about-us#awards'}
       goBackHref={'/about-us'}
     >
       <Typeset
        content={content}
       />
     </LayoutTitleDateContent>
   </Fragment>
  );
};

export default AwardDetail;
