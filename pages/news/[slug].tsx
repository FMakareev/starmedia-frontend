import * as React from 'react';
import LayoutTitleDateContent from '../../components/Layout/LayoutTitleDateContent';
import NewsNext from "../../pageTemplate/News/NewsNext";

interface ISlugProps {
  [prop: string]: any
}


const NewsDetails: React.FC<ISlugProps> = () => {
  return (
    <LayoutTitleDateContent
      title={'продолжаются съемки исторической драмы «Сердце пармы»'}
      date={'28.08.2019'}
      bottom={<NewsNext/>}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque iusto magnam maxime quas veritatis
      voluptatum! Adipisci amet animi asperiores error est eveniet id, illum quas quisquam rem sint voluptate?
    </LayoutTitleDateContent>
  );
};

export default NewsDetails;
