import * as React from 'react';
import {Award} from "../../types/types";
import AwardIcon from '../../components/Icons/AwardIcon';

interface IAwardCardProps extends Award {
  [prop: string]: any
}

const AwardCard: React.FC<IAwardCardProps> = () => {
  return (
    <div className={'award-card_wrapper'}>
      <div className="award-card_icon">
        <AwardIcon/>
      </div>
      <div className="award-card_title">
        Главный приз в конкурсе «International Gold Panda Awards for TV Drama»
      </div>
      <div className="award-card_bottom">
        <div className="award-card_year">
          2007
        </div>
        <div className="award-card_detail">
          Подробнее
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
