import { gql } from "apollo-boost"
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetGenres} from "../../types/projectTypes";



export const GetGenresQueryRU = gql`    
{
    getGenres{
        name{
            ru
        }
        count
    }
}
`;
export const GetGenresQueryEN = gql`
    {
        getGenres{
            name{
                en
            }
            count
        }
    }
`;
export const GetGenresQueryUK = gql`
    {
        getGenres{
            name{
                uk
            }
            count
        }
    }
`;

export const useGetGenresQuery = ()=>{
  return useLocalizationQuery<GetGenres>({
    ru: GetGenresQueryRU,
    en: GetGenresQueryEN,
    uk: GetGenresQueryUK,
  });
};
