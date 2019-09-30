import * as React from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';
import {ButtonElementEnum} from "../../types/types";
import Col from "../Col/Col";

interface ISearchResultCardProps {
  [prop: string]: any
}

const SearchResultCard: React.FC<ISearchResultCardProps> = () => {
  return (
    <Col pt={20} pb={20} className={'search-result-card_wrapper'}>
      <Button
        mods={['m']}
        mb={10}
        element={ButtonElementEnum.link}
        href={'item.href'}
        as={'a'}
      >
        Заголовок
      </Button>
      <Text font={'root'} size={'m'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti deserunt doloremque eligendi eum,
        facilis harum molestiae neque nisi nostrum optio, porro quae recusandae temporibus tenetur? Enim fugiat
        molestiae natus.
      </Text>
    </Col>
  );
};

export default SearchResultCard;
