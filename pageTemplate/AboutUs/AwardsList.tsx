import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import AwardCard from '../../components/AwardCard/AwardCard';
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Button from "../../components/Button/Button";

interface IAwardsListProps {
  [prop: string]: any
}

const awards: any[] = ['','','','','','','','','','',];

const AwardsList: React.FC<IAwardsListProps> = () => {
  return (
    <Container>
      <Row
        mb={[40,40,72]}
        className={'about-us-awards_list'}
      >
        {
          awards.map((_,index)=><Col key={index}>
            <AwardCard/>
          </Col>)
        }
      </Row>
      <Row center={ViewportSizeEnum.sm}>
        <Button mods={['m']} element={ButtonElementEnum.circle}>
          Показать <br/> еще
        </Button>
      </Row>
    </Container>
  );
};

export default AwardsList;
