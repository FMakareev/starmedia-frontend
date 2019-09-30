import * as React from 'react';
import NewsCardLarge from '../../components/NewsCardLarge/NewsCardLarge';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';

interface INewsListProps {
  [prop: string]: any
}

const NewsList: React.FC<INewsListProps> = () => {
  return (
    <Container mb={64} pt={[40,40,56]}>
      <Row >
        <Col xs={12}>
          <NewsCardLarge/>
        </Col>
        <Col xs={12}>
          <NewsCardLarge/>
        </Col>
        <Col xs={12}>
          <NewsCardLarge/>
        </Col>
        <Col xs={12}>
          <NewsCardLarge/>
        </Col>
      </Row>

    </Container>
  );
};

export default NewsList;
