import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from "../../components/Row/Row";
import TextField from '../../components/TextField/TextField';
import SearchIcon from '../../components/Icons/SearchIcon';
import {useTranslation} from "../../libs/i18n";
import dynamic from "next-server/dynamic";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetFiltersRU, GetFiltersEN, GetFiltersUK} from "../../apollo/query/GetFilters";
import {GetFilters} from "../../types/projectTypes";
import {AppLanguages, LocalizedString,} from "../../types/types";
import memo from 'fast-memoize';

const SelectSlim = dynamic(
  () => import("../../components/SelectSlim/SelectSlim"),
  {ssr: false}
);

interface IProjectFilterProps {
  [prop: string]: any
}

// @ts-ignore
const DATA: any = {
  "getFilters": {
    "formats": [
      {
        "ru": "сериал"
      },
      {
        "ru": "фильм"
      },
      {
        "ru": "историческая реконструкция"
      },
      {
        "ru": "историческая реконструкция"
      },
      {
        "ru": "сериал"
      },
      {
        "ru": "сериал"
      },
      {
        "ru": "фильм"
      },
      {
        "ru": "телевизионный формат"
      },
      {
        "ru": "телевизионный формат"
      },
      {
        "ru": "телевизионный проект"
      },
      {
        "ru": "телевизионный проект"
      }
    ],
    "genres": [
      {
        "ru": ""
      },
      {
        "ru": "драма"
      },
      {
        "ru": "мелодрама"
      },
      {
        "ru": "детектив "
      },
      {
        "ru": "докудрама"
      },
      {
        "ru": "мелодрама "
      },
      {
        "ru": "психологическая драма"
      },
      {
        "ru": "мелодрама "
      },
      {
        "ru": "драмеди"
      },
      {
        "ru": "докудрама"
      },
      {
        "ru": "мелодрама"
      },
      {
        "ru": "мелодрама "
      },
      {
        "ru": "военно-историческая драма "
      },
      {
        "ru": "военно-историческая драма"
      },
      {
        "ru": "мелодрама "
      },
      {
        "ru": "криминал, приключения, мелодрама"
      },
      {
        "ru": "триллер"
      },
      {
        "ru": "военная драма"
      },
      {
        "ru": "шпионский боевик"
      },
      {
        "ru": "триллер, детектив"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "мелодрама"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "романтическая комедия"
      },
      {
        "ru": "драма, детектив"
      },
      {
        "ru": "военно-историческая драма"
      },
      {
        "ru": "драма"
      },
      {
        "ru": "военная драма"
      },
      {
        "ru": "детектив-триллер"
      },
      {
        "ru": "комедия"
      },
      {
        "ru": "биографическая драма"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "военно-историческая драма"
      },
      {
        "ru": "криминальная драма с элементами фантастики"
      },
      {
        "ru": "приключенческий детектив"
      },
      {
        "ru": "детектив с элементами мистики"
      },
      {
        "ru": "криминальная мелодрама"
      },
      {
        "ru": "комедия, приключения, музыкальный \t"
      },
      {
        "ru": "историческая драма"
      },
      {
        "ru": "лирическая комедия "
      },
      {
        "ru": "романтическая комедия"
      },
      {
        "ru": "приключенческая драма"
      },
      {
        "ru": "лирическая комедия"
      },
      {
        "ru": "военно-историческая драма"
      },
      {
        "ru": "военная драма"
      },
      {
        "ru": "детективная мелодрама"
      },
      {
        "ru": " военно-историческая драма"
      },
      {
        "ru": "лирическая комедия"
      },
      {
        "ru": "биографический документальный фильм"
      },
      {
        "ru": "приключенческий детектив"
      },
      {
        "ru": "криминальная драма"
      },
      {
        "ru": "криминальный детектив"
      },
      {
        "ru": "криминальная драма"
      },
      {
        "ru": "экшн"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "криминальная драма "
      },
      {
        "ru": "комедия, мелодрама"
      },
      {
        "ru": "лирическая комедия"
      },
      {
        "ru": "историческая мелодрама"
      },
      {
        "ru": "военная драма"
      },
      {
        "ru": "криминальная драма, экшн"
      },
      {
        "ru": "мистический триллер"
      },
      {
        "ru": "военно-приключенческий фильм"
      },
      {
        "ru": "комедийный детектив"
      },
      {
        "ru": "драма, биография"
      },
      {
        "ru": "докудрама"
      },
      {
        "ru": "криминальная мелодрама"
      },
      {
        "ru": "военный детектив"
      },
      {
        "ru": "ТВ-шоу"
      },
      {
        "ru": "детектив"
      },
      {
        "ru": "танцевальное шоу"
      },
      {
        "ru": "ток-шоу"
      },
      {
        "ru": "остросюжетный детектив"
      },
      {
        "ru": "иронический детектив"
      },
      {
        "ru": "развлекательное танцевальное шоу"
      },
      {
        "ru": "ТВ-шоу"
      },
      {
        "ru": "криминальная драма"
      },
      {
        "ru": "историческая драма"
      },
      {
        "ru": "развлекательное шоу"
      },
      {
        "ru": "детектив с элементами комедии"
      },
      {
        "ru": "авантюрная мелодрама"
      },
      {
        "ru": "телевизионное шоу"
      },
      {
        "ru": "драмеди с элементами фантастики"
      },
      {
        "ru": "лирико-эксцентрическая комедия"
      },
      {
        "ru": "психологический триллер"
      },
      {
        "ru": "историческая анимация"
      },
      {
        "ru": "мелодрама/телевизионный роман"
      },
      {
        "ru": "криминальная драма"
      },
      {
        "ru": "историко-приключенческая драма"
      },
      {
        "ru": "романтический триллер"
      },
      {
        "ru": "психологический детектив"
      },
      {
        "ru": "семейная сага"
      },
      {
        "ru": "военно-шпионский детектив"
      },
      {
        "ru": "детективная драма"
      },
      {
        "ru": "приключенческая мелодрама"
      },
      {
        "ru": "сериал с элементами фантастики"
      },
      {
        "ru": "иронический детектив"
      },
      {
        "ru": "сериал с элементами фантастики"
      },
      {
        "ru": "фантастическая комедия"
      },
      {
        "ru": "мелодрама"
      },
      {
        "ru": "исторический мини-формат"
      },
      {
        "ru": "лирическая драма"
      },
      {
        "ru": "детектив с элементами «экшн»"
      },
      {
        "ru": "военно-шпионский детектив"
      },
      {
        "ru": "комедийная мелодрама"
      },
      {
        "ru": "психологический триллер"
      },
      {
        "ru": "остросюжетный детектив"
      },
      {
        "ru": "лирическая мелодрама"
      },
      {
        "ru": "исторический миниформат"
      },
      {
        "ru": "любовный детектив"
      },
      {
        "ru": "фантастическая трагикомедия"
      },
      {
        "ru": "мелодрама"
      },
      {
        "ru": "военно-шпионский детектив"
      },
      {
        "ru": "комедия"
      },
      {
        "ru": "фантастика"
      },
      {
        "ru": "анимация"
      },
      {
        "ru": "Лирическая комедия"
      },
      {
        "ru": ""
      },
      {
        "ru": "реалити"
      },
      {
        "ru": "приключенческая драма "
      },
      {
        "ru": "драма с элементами мистики"
      },
      {
        "ru": "реалити"
      }
    ],
    "years": [
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      ""
    ]
  }
}


const CheckFilterOption = (language: AppLanguages) => (option: LocalizedString) => {
  //@ts-ignore
  if (language in option && option[language] && option[language].length > 0) {
    return true;
  }
  return false;
};

const OptionFormat = memo((options: LocalizedString[], optionAll:any, language: AppLanguages) => {
  let filteredOptions = options
    .filter(CheckFilterOption(language));
  let uniqueOption: any[] = [...new Set(filteredOptions.map(option => {
    // @ts-ignore
    return language in option && option[language].trim()
  }))];
  return [
    optionAll,
    ...uniqueOption.map((option: any) => ({
      label: option,
      value: option,
    })),
  ]
});

const removeUniqueInArray = (arr: any[]) => {
  let result: any[] = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};

const OptionYearFormat = memo((options: string[],optionAll:any,_) => {
  let filterOption: any[] = options
    .filter((option: string) => {
      //@ts-ignore
      if (option && option.length > 0) {
        return true;
      }
      return false;
    });

  return [
    optionAll,
    ...removeUniqueInArray(filterOption)
      .map((item: any) => ({
        label: item,
        value: item,
      })),
  ]
});


const ProjectFilter: React.FC<IProjectFilterProps> = (
  {
    filters,
    setFilters,
  }
) => {
  const {t, i18n} = useTranslation('common');
  // @ts-ignore
  const {data, loading} = useLocalizationQuery<GetFilters>({
    ru: GetFiltersRU,
    en: GetFiltersEN,
    uk: GetFiltersUK,
  });

  if (loading) {
    return null;
  }
  // @ts-ignore
  const lang: AppLanguages = i18n.language;
  const optionAll = {
    label: t('filter_options-all'),
    value: '',
  };

  const formats = OptionFormat(data && data.getFilters && data.getFilters.formats || [], optionAll, lang);
  const genres = OptionFormat(data && data.getFilters && data.getFilters.genres || [], optionAll, lang);

  const yearList: any[] = OptionYearFormat(data && data.getFilters && data.getFilters.years && data.getFilters.years || [], optionAll, lang);

  return (
    <Container mb={40} mt={24}>
      <Row>
        <Col mb={16} xs={12} md={3}>
          <SelectSlim
            label={t('filter_format-label')}
            input={{
              value: filters.format,
              onChange: (event: any) => {
                setFilters({
                  ...filters,
                  format: event,
                })
              }
            }}
            options={[optionAll, ...formats]}
            styles={{
              container: {
                width: '100%',
              }
            }}
          />
        </Col>
        <Col mb={16} xs={12} md={3}>
          <SelectSlim
            label={t('filter_genre-label')}
            input={{
              value: filters.genre,
              onChange: (event: any) => {
                setFilters({
                  ...filters,
                  genre: event,
                })
              }
            }}
            options={[optionAll, ...genres]}
            styles={{
              container: {
                width: '100%',
              }
            }}
          />
        </Col>
        <Col xs={12} md={3}>
          <SelectSlim
            label={t('filter_year-label')}
            style={{
              width: '144px'
            }}
            input={{
              value: filters.year,
              onChange: (event: any) => {
                setFilters({
                  ...filters,
                  year: event,
                })
              }
            }}
            options={[optionAll, ...yearList]}
          />
        </Col>
        <Col xs={12} md={3}>

          <TextField
            input={{
              value: filters.query,
              onChange: (event: any) => {
                setFilters({
                  ...filters,
                  search: event.target.value,
                })
              }
            }}
            label={' '}
            icon={<SearchIcon width={'16px'} height={'16px'}/>}
            placeholder={t('search_placeholder-search-by-name')}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectFilter;
