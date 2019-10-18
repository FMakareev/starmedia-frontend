import * as React from 'react';
import Button from "../../../components/Button/Button";
import {ButtonElementEnum} from "../../../types/types";
import PlayIcon from "../../../components/Icons/PlayIcon";
import Text from "../../../components/Text/Text";
import {useTranslation} from "../../../libs/i18n";

interface ISectionMainWatchOnlineProps {
  [prop: string]: any
}

const SectionMainWatchOnline: React.FC<ISectionMainWatchOnlineProps> = (
  {
    onMouseEnter,
    onMouseLeave,
  }
) => {
  const {t} = useTranslation('common');

  return (
    <Button className={'watch-online'} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} element={ButtonElementEnum.transparent}>
      <Button mr={16} as={'div'} element={ButtonElementEnum.circle} mods={['inverse', 's']}>
        <PlayIcon/>
      </Button>
      <Text as={'span'} font={'root'} type={'inherit'}>
        {t('button_watch-online')}
      </Text>
    </Button>
  );
};

export default SectionMainWatchOnline;
