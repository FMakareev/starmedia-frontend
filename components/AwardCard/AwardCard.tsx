import * as React from 'react';
import {Award} from "../../types/types";
import AwardIcon from '../../components/Icons/AwardIcon';
import {useTranslation} from '../../libs/i18n';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {DateFormatYear} from '../../libs/DateFormat';

interface IAwardCardProps extends Award {
  [prop: string]: any
}

const AwardCard: React.FC<IAwardCardProps> = (
  {
    date,
    name
  }
) => {
  const {t} = useTranslation('common');

  return (
    <div className={'award-card_wrapper'}>
      <div>
        <div className="award-card_icon">
          <AwardIcon/>
        </div>
        <div className="award-card_title">
          {
            GetLocalizationString(name)
          }
        </div>
      </div>
      <div className="award-card_bottom">
        <div className="award-card_year">
          {
            DateFormatYear(date || '')
          }
        </div>
        <div className="award-card_detail">
          {t('button_detail')}
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
