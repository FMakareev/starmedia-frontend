import * as React from 'react';
import NewsCardLarge from '../../components/NewsCardLarge/NewsCardLarge';
import Container from '../../components/Container/Container';
import {News} from 'types/newsTypes';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Col from "../../components/Col/Col";

interface INewsListProps {
  [prop: string]: any
}

const NewsList: React.FC<INewsListProps> = (
  {
    data,
  }
) => {


  return (
    <Container mb={64} pt={[40, 40, 56]}>
      <TransitionGroup className={'row'}>
        {
          data && data.map((news: News, index: number) => (
            <CSSTransition
              timeout={300}
              key={index}
              classNames={'transition-list'}
            >
              <Col xs={12}>
                <NewsCardLarge
                  {...news}
                />
              </Col>
            </CSSTransition>))
        }
      </TransitionGroup>

    </Container>
  );
};

export default NewsList;
