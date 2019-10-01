import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import AwardCard from '../../components/AwardCard/AwardCard';
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Button from "../../components/Button/Button";
import {useTranslation} from "../../libs/i18n";

interface IAwardsListProps {
  [prop: string]: any
}

const awards: any[] = ['','','','','','','','','','',];

const AwardsList: React.FC<IAwardsListProps> = () => {
  const {t} = useTranslation('common');
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
          {t('button_show-more')}
        </Button>
      </Row>
    </Container>
  );
};

export default AwardsList;
