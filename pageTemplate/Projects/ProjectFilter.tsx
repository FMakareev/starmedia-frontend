import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from "../../components/Row/Row";
import Select from '../../components/Select/Select';
import TextField from '../../components/TextField/TextField';
import SearchIcon from '../../components/Icons/SearchIcon';
import {useTranslation} from "../../libs/i18n";

interface IProjectFilterProps {
  [prop: string]: any
}

const ProjectFilter: React.FC<IProjectFilterProps> = () => {
  const {t} = useTranslation('common');
  return (
    <Container mb={56} mt={32} >
      <Row>
        <Col md={3}>
          <Select
            label={t('filter_format-label')}
            input={{
              value: {
                label:'Все',
                value:'all',
              }
            }}
            options={[{
              label:'Все',
              value:'all',
            }]}
            styles={{
              container:{
                width: '100%',
              }
            }}
          />
        </Col>
        <Col md={3}>
          <Select
            label={t('filter_genre-label')}
            input={{
              value: {
                label:'Все',
                value:'all',
              }
            }}
            options={[{
              label:'Все',
              value:'all',
            }]}
            styles={{
              container:{
                width: '100%',
              }
            }}
          />

        </Col>
        <Col md={3}>
          <Select
            label={t('filter_year-label')}
            input={{
              value: {
                label:'Все',
                value:'all',
              }
            }}
            options={[{
              label:'Все',
              value:'all',
            }]}
          />
        </Col>
        <Col md={3}>

          <TextField
            label={' '}
            icon={<SearchIcon width={'16px'} height={'16px'} />}
            placeholder={t('search_placeholder-search-by-name')}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectFilter;
