import * as React from 'react';
import Button from "../../../components/Button/Button";
import Row from '../../../components/Row/Row';
import Text from '../../../components/Text/Text';
import Container from "../../../components/Container/Container";
import {ButtonElementEnum, ViewportSizeEnum} from "../../../types/types";
import SocialLinkList, {SocialLinkVariantEnum} from "../../../components/SocialLinkList/SocialLinkList";
import SectionNewsList from './SectionNewsList';
import Link from "../../../components/Link/Link";
import {useTranslation} from "../../../libs/i18n";
import {News} from '../../../types/newsTypes';
import {SocialLinkTypeEnum} from "../../../types/socialLink";
import {useLocalizationQuery} from "../../../libs/useLocalizationQuery";
import {NewsPaginationEN, NewsPaginationRU, NewsPaginationUK} from "../../../apollo/query/GetNewsQuery";
import ReactHtmlParser from "react-html-parser";
import {ExcludeSocialLinkByLocale} from "../../../libs/ExcludeSocialLinkByLocale";


interface ISectionNewsProps {
  news?: News[];

  [prop: string]: any
}


const SectionNews: React.FC<ISectionNewsProps> = () => {

  const {data} = useLocalizationQuery({
    ru: NewsPaginationRU,
    en: NewsPaginationEN,
    uk: NewsPaginationUK,
  }, {
    variables: {
      limit: 4,
      page: 1,
    }
  });

  const {t, i18n} = useTranslation('home');

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
            news={data && data.newsPagination && data.newsPagination.items}
          />
        </Row>
        <Row mb={22} center={ViewportSizeEnum.xs}>
          <Link href={'/news'}>
            <a href={'/news'}>
              <Button aria-label={'show all news'} mods={['m']} element={ButtonElementEnum.circle}>
                <span className={'reset-style'}>
                  {
                    ReactHtmlParser(t('section_news_btn-all-news'))
                  }
                </span>
              </Button>
            </a>
          </Link>
        </Row>
        <div className="section-news_bottom">
          <Link href={'/news'}>
            <SocialLinkList
              mods={['gray', 'm']}
              exclude={ExcludeSocialLinkByLocale(
                {
                  ru: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB, SocialLinkTypeEnum.TWITTER, SocialLinkTypeEnum.YOUTUBE],
                  en: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB, SocialLinkTypeEnum.TWITTER, SocialLinkTypeEnum.YOUTUBE, SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK],
                  uk: [SocialLinkTypeEnum.GOOGLE_PLUS, SocialLinkTypeEnum.IMDB, SocialLinkTypeEnum.TWITTER, SocialLinkTypeEnum.YOUTUBE, SocialLinkTypeEnum.VK, SocialLinkTypeEnum.OK],
                },
                i18n
              )}
              variant={SocialLinkVariantEnum.shortName}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SectionNews;
