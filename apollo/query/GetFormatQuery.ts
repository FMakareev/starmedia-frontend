import { gql } from "apollo-boost";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetFormat} from "../../types/projectTypes";



export const GetFormatQueryRU = gql`
    {
        getFormat{
            name{
                ru
            }
            count
        }
    }
`;

export const GetFormatQueryEN = gql`
    {
        getFormat{
            name{
                en
            }
            count
        }
    }
`;

export const GetFormatQueryUK = gql`
    {
        getFormat{
            name{
                uk
            }
            count
        }
    }
`;


export const useGetFormatQuery = ()=>{
    return useLocalizationQuery<GetFormat>({
        ru: GetFormatQueryRU,
        en: GetFormatQueryEN,
        uk: GetFormatQueryUK,
    });
};
