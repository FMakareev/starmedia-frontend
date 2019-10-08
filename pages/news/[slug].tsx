import * as React from 'react';
import LayoutTitleDateContent from '../../components/Layout/LayoutTitleDateContent';
import NewsNext from "../../pageTemplate/News/NewsNext";
import {useTranslation} from "react-i18next";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {useRouter} from "next/router";
import Preloader from "../../components/Preloader/Preloader";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {GetNewsRUQuery, GetNewsENQuery, GetNewsUKQuery} from '../../apollo/query/GetNewsQuery';
import Head from "../../components/Head/Head";
import {Fragment} from "react";
import {DateFormat} from "../../libs/DateFormat";
import Typeset from "../../components/Typeset/Typeset";

interface ISlugProps {
  [prop: string]: any
}


const NewsDetails: React.FC<ISlugProps> = () => {
  const {t} = useTranslation('common');

  const {query} = useRouter();
  const {data, loading} = useLocalizationQuery({
    ru: GetNewsRUQuery,
    en: GetNewsENQuery,
    uk: GetNewsUKQuery,
  }, {
    variables: {
      slug: query.slug,
    }
  });
  const title = GetLocalizationString(data && data.getNews.name);
  const content = GetLocalizationString(data && data.getNews.content);

  if (loading) {
    return <Preloader/>
  }

  return (
    <Fragment>
      <Head
        seoTags={data && data.getNews.seoTags}
        title={title}
      />
      <LayoutTitleDateContent
        title={title}
        date={data && DateFormat(data.getNews.date)}
        bottom={<NewsNext/>}
        goBackLabel={t('news_go-back')}
        goBackLink={'/news'}
      >
        <Typeset
          content={content}
        />
      </LayoutTitleDateContent>
    </Fragment>
  );
};

export default NewsDetails;
