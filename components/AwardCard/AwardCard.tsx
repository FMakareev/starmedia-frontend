import * as React from 'react';
import {Award} from "../../types/awardsTypes";
import AwardIcon from '../../components/Icons/AwardIcon';
import {useTranslation} from '../../libs/i18n';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {DateFormatYear} from '../../libs/DateFormat';
import Link from "next/link";

interface IAwardCardProps extends Award {
  [prop: string]: any
}

const AwardCard: React.FC<IAwardCardProps> = (
  {
    date,
    name,
    slug
  }
) => {
  const {t,i18n} = useTranslation('common');

  return (
    <Link as={`/award/${slug}`} href={`/award/[slug]`}>
      <a href={`/award/${slug}`}>
        <div className={'award-card_wrapper'}>
          <div>
            <div className="award-card_icon">
              <AwardIcon/>
            </div>
            <div className="award-card_title">
              {
                GetLocalizationString(name,i18n)
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
      </a>
    </Link>
  );
};

export default AwardCard;
