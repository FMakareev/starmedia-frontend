import * as React from 'react';
import Container from '../../components/Container/Container';
import Col from '../../components/Col/Col';
import Row from "../../components/Row/Row";
import Select from '../../components/Select/Select';
import TextField from '../../components/TextField/TextField';
import SearchIcon from '../../components/Icons/SearchIcon';

interface IProjectFilterProps {
  [prop: string]: any
}

const ProjectFilter: React.FC<IProjectFilterProps> = () => {
  return (
    <Container mb={56} mt={32} >
      <Row>
        <Col md={3}>
          <Select
            label={'Формат'}
          />
        </Col>
        <Col md={3}>
          <Select
            label={'Жанр'}
          />

        </Col>
        <Col md={3}>

          <Select
            label={'Год'}
          />
        </Col>
        <Col md={3}>

          <TextField
            label={' '}
            icon={<SearchIcon width={'16px'} height={'16px'} />}
            placeholder={'Поиск по названию'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectFilter;
