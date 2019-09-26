import * as React from 'react';
import Button from "../../../components/Button/Button";
import {ButtonElementEnum} from "../../../types/types";
import PlayIcon from "../../../components/Icons/PlayIcon";
import Text from "../../../components/Text/Text";

interface ISectionMainWatchOnlineProps {
  [prop: string]: any
}

const SectionMainWatchOnline: React.FC<ISectionMainWatchOnlineProps> = () => {
  return (
    <Button element={ButtonElementEnum.transparent}>
      <Button mr={16} as={'div'} element={ButtonElementEnum.circle} mods={['inverse', 's']}>
        <PlayIcon/>
      </Button>
      <Text as={'span'} font={'root'} type={'inherit'}>
        Смотреть онлайн
      </Text>
    </Button>
  );
};

export default SectionMainWatchOnline;
