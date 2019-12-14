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

const CheckFilterOption = (language: AppLanguages) => (option: LocalizedString) => {
  //@ts-ignore
  if (language in option && option[language] && option[language].length > 0) {
    return true;
  }
  return false;
};

const OptionFormat = memo((options: LocalizedString[], optionAll: any, language: AppLanguages) => {
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

const OptionYearFormat = memo((options: string[], optionAll: any, _) => {
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
  const {data} = useLocalizationQuery<GetFilters>({
    ru: GetFiltersRU,
    en: GetFiltersEN,
    uk: GetFiltersUK,
  }, {
    errorPolicy: 'ignore',
  });


  // @ts-ignore
  const lang: AppLanguages = i18n.language;
  const optionAll = {
    label: t('filter_options-all'),
    value: '*',
  };

  const formats = OptionFormat(data && data.getFilters && data.getFilters.formats || [], optionAll, lang);
  const genres = OptionFormat(data && data.getFilters && data.getFilters.genres || [], optionAll, lang);

  const yearList: any[] = OptionYearFormat(data && data.getFilters && data.getFilters.years && data.getFilters.years || [], optionAll, lang);
  console.log('ProjectFilter filters: ', filters);
  return (
    <Container mb={40} mt={24}>
      <Row>
        <Col mb={16} xs={12} md={3}>
          <SelectSlim
            label={t('filter_format-label')}
            input={{
              value: filters.format,
              onChange: (format: string) => setFilters({format})
            }}
            options={formats}
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
              onChange: (genre: string) => setFilters({genre})
            }}
            options={genres}
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
              value: `${filters.year}`,
              onChange: (year: string) => setFilters({year})

            }}
            options={yearList}
          />
        </Col>
        <Col xs={12} md={3}>

          <TextField
            input={{
              value: filters.query,
              onChange: (event: any) => {
                setFilters({search: event.target.value,})
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
