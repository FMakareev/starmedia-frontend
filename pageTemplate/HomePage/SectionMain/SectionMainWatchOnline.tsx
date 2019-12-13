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
    watchOnline,
  }
) => {
  const {t} = useTranslation('common');

  return (
    <Button
      as={'a'}
      href={watchOnline}
      target={'_blank'}
      className={'watch-online'}
      onMouseLeave={() => {
        onMouseLeave && onMouseLeave();
      }}
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter()
      }}
      element={ButtonElementEnum.transparent}
    >
      <Button
        mr={16}
        as={'div'}
        element={ButtonElementEnum.circle}
        mods={['inverse', 's']}
        className={'section-main_watch-online'}
      >
        <PlayIcon/>
      </Button>
      <Text as={'span'} font={'root'} type={'inherit'}>
        {t('button_watch-online')}
      </Text>
    </Button>
  );
};

export default SectionMainWatchOnline;
