import { gql } from "apollo-boost";



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
