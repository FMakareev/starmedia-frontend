import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import CooperationTabs from '../pageTemplate/Cooperation/CooperationTabs';
import {withTranslation} from "../libs/i18n";

interface ICooperationProps {
  [prop: string]: any
}

const Cooperation: React.FC<ICooperationProps> = ({t}) => {

  return (
    <LayoutTitleWithContent
      titleStyle={{
        mb: 32,
      }}
      title={t('nav-cooperation')}
    >
      <CooperationTabs/>
    </LayoutTitleWithContent>
  );
};

export default withTranslation(['nav','home','footer','common'])(Cooperation);
