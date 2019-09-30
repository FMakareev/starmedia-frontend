import * as React from 'react';
import Text from '../../components/Text/Text';
import NewsCardLarge from "../../components/NewsCardLarge/NewsCardLarge";
interface INewsNextProps {
    [prop:string]: any
}

const NewsNext: React.FC<INewsNextProps> = () => {
     return (
              <div>
                <Text mb={[20,20,48]} font={'object'} className={'text_uppercase'} size={'l'}>
                  Следующая новость
                </Text>
                <NewsCardLarge/>
              </div>
       );
};

export default NewsNext;
