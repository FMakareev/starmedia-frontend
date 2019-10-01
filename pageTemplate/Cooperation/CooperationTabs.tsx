import * as React from 'react';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import {ButtonElementEnum} from "../../types/types";
import {CooperationMock} from '../../mock';
import ReactHtmlParser from 'react-html-parser';
import CooperationForm from './CooperationForm';
import {useTranslation} from "../../libs/i18n";

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
    return 'form-field_label-link-works'
  }
  if(isActive === TypesC.scripts){
    return 'form-field_label-link-script'
  }
  if(isActive === TypesC.actors){
    return 'form-field_label-link-portfolio'
  }
  return ''
}

const CooperationTabs: React.FC<ICooperationTabsProps> = () => {

  const {t} = useTranslation('common');
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
                {t('tabs_actors')}
              </Button>
            </li>
            <li className="cooperation-tabs_li">
              <Button
                onClick={() => setActive(TypesC.scripts)}
                isActive={isActive === TypesC.scripts}
                element={ButtonElementEnum.tab}
              >
                {t('tabs_scripts')}
              </Button>
            </li>
            <li className="cooperation-tabs_li">
              <Button
                onClick={() => setActive(TypesC.director)}
                isActive={isActive === TypesC.director}
                element={ButtonElementEnum.tab}
              >
                {t('tabs_director')}
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
