import * as React from 'react';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import CooperationTabs from '../pageTemplate/Cooperation/CooperationTabs';

interface ICooperationProps {
  [prop: string]: any
}

const Cooperation: React.FC<ICooperationProps> = () => {
  return (
    <LayoutTitleWithContent
      titleStyle={{
        mb: 32,
      }}
      title={'Сотрудничество'}
    >
      <CooperationTabs/>
    </LayoutTitleWithContent>
  );
};

export default Cooperation;
