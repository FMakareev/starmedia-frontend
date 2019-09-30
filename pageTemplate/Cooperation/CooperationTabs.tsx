import * as React from 'react';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import {ButtonElementEnum} from "../../types/types";
import {CooperationMock} from '../../mock';
import ReactHtmlParser from 'react-html-parser';
import CooperationForm from './CooperationForm';

interface ICooperationTabsProps {
  [prop: string]: any
}

enum TypesC {
  actors = 'actors',
  scripts = 'scripts',
  director = 'director',
}


const getLinkLabel = (isActive: TypesC) =>{

  if(isActive === TypesC.director){
    return 'Ссылки на работы, фильмография'
  }
  if(isActive === TypesC.scripts){
    return 'Ссылка на сценарий'
  }
  if(isActive === TypesC.actors){
    return 'Ссылка на портфолио'
  }
  return ''
}

const CooperationTabs: React.FC<ICooperationTabsProps> = () => {

  const [isActive, setActive] = React.useState<TypesC>(TypesC.actors);


  // @ts-ignore
  const Html = ReactHtmlParser(CooperationMock
    && CooperationMock[isActive]
    // @ts-ignore
    && CooperationMock[isActive].description
    // @ts-ignore
    && CooperationMock[isActive].description.ru);


  return (
    <Container mb={32}>
      <Row mb={56}>
        <Col xs={12}>
          <ul className="cooperation-tabs_list">
            <li className="cooperation-tabs_li">
              <Button
                onClick={() => setActive(TypesC.actors)}
                isActive={isActive === TypesC.actors}
                element={ButtonElementEnum.tab}
              >
                Актеры
              </Button>
            </li>
            <li className="cooperation-tabs_li">
              <Button
                onClick={() => setActive(TypesC.scripts)}
                isActive={isActive === TypesC.scripts}
                element={ButtonElementEnum.tab}
              >
                сценарии
              </Button>
            </li>
            <li className="cooperation-tabs_li">
              <Button
                onClick={() => setActive(TypesC.director)}
                isActive={isActive === TypesC.director}
                element={ButtonElementEnum.tab}
              >
                Режиссеры
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col mb={50} xs={12} sm={6}>
          {
            Html
          }
        </Col>
        <Col xs={12} sm={6}>
          <CooperationForm
            linkLabel={getLinkLabel(isActive)}
          />
        </Col>
      </Row>
    </Container>

  );
};

export default CooperationTabs;
