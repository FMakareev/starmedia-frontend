import * as React from 'react';
import Button from "../../../components/Button/Button";
import Row from '../../../components/Row/Row';
import Text from '../../../components/Text/Text';
import Container from "../../../components/Container/Container";
import {ButtonElementEnum, ViewportSizeEnum} from "../../../types/types";
import {SocialLinkListMock} from "../../../config";
import SocialLinkList, {SocialLinkVariantEnum} from "../../../components/SocialLinkList/SocialLinkList";
import SectionNewsList from './SectionNewsList';
import Link from "../../../components/Link/Link";
import {useTranslation} from "../../../libs/i18n";

interface ISectionNewsProps {
  [prop: string]: any
}


const news = [
  {
    title: 'Продолжаются съемки исторической драмы «Сердце пармы»',
    publish: '22.08.2019',
  },
  {
    title: 'Теперь наши сериалы «Анна-детективъ» и «Метод Фрейда» доступны на интернет-платформах по всей Прибалтике!',
    publish: '20.08.2019',
  },
  {
    title: 'Премьера телевизионного сериала «Без колебаний» на телеканале «Украина».',
    publish: '12.08.2019',
  },
  {
    title: 'Star Media приступила к съемкам четвертого сезона военно-исторической драмы «По законам военного времени».',
    publish: '16.07.2019',
  },

]



const SectionNews: React.FC<ISectionNewsProps> = () => {
  const {t} = useTranslation('home');
  return (
    <div className={'section-news_wrapper'}>
      <Container>
        <div className="section-news_top mb-44">
          <Text className={'text_uppercase'} size={'l'} as={'h2'}>
            {t('section_news_title')}
          </Text>
        </div>
        <Row className="section-news_list">
          <SectionNewsList
            news={news}
          />
        </Row>
        <Row mb={22} center={ViewportSizeEnum.sm}>
          <Button aria-label={'show all news'}  mods={['m']} element={ButtonElementEnum.circle}>
            {t('section_news_btn-all-news')}
          </Button>
        </Row>
        <div className="section-news_bottom">
         <Link href={'/news'}>
           <SocialLinkList
             mods={['gray', 'm']}
             variant={SocialLinkVariantEnum.shortName}
             links={SocialLinkListMock}
           />
         </Link>
        </div>
      </Container>
    </div>
  );
};

export default SectionNews;
