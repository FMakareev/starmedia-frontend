import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from "../../components/Row/Row";
// import Select from '../../components/Select/Select';
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
)

interface IProjectFilterProps {
  [prop: string]: any
}


const generateYearArray = memo((start: number, end: number) => {
  let yearArray: object[] = [{
    label: start,
    value: start,
  }];
  for (let i = 1; i <= end - start; i += 1) {
    yearArray.push({
      label: start + i,
      value: start + i,
    });
  }
  return yearArray;
});


const OptionFormat = memo((options: LocalizedString[], language: AppLanguages) => {
  return options.map((option: LocalizedString) => ({
    label: language in option && option[language],
    value: `${language in option && option[language]}`,
  }))
});


const ProjectFilter: React.FC<IProjectFilterProps> = (
  {
    filters,
    setFilters,
  }
) => {
  const {t, i18n} = useTranslation('common');

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

  const formats = OptionFormat(data && data.getFilters && data.getFilters.formats || [], lang);
  const genres = OptionFormat(data && data.getFilters && data.getFilters.genres || [], lang);
  const yearList = generateYearArray(2006, new Date().getFullYear() + 1);
  const optionAll = {
    label: t('filter_options-all'),
    value: '',
  };

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
