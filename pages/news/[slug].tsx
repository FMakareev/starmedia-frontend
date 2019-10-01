import * as React from 'react';
import LayoutTitleDateContent from '../../components/Layout/LayoutTitleDateContent';
import NewsNext from "../../pageTemplate/News/NewsNext";
import {useTranslation} from "react-i18next";

interface ISlugProps {
  [prop: string]: any
}


const NewsDetails: React.FC<ISlugProps> = () => {
  const {t} = useTranslation('common');

  return (
    <LayoutTitleDateContent
      title={'продолжаются съемки исторической драмы «Сердце пармы»'}
      date={'28.08.2019'}
      bottom={<NewsNext/>}
      goBackLabel={t('news_go-back')}
      goBackLink={'/news'}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque iusto magnam maxime quas veritatis
      voluptatum! Adipisci amet animi asperiores error est eveniet id, illum quas quisquam rem sint voluptate?
    </LayoutTitleDateContent>
  );
};

export default NewsDetails;
