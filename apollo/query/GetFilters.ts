import {gql} from "apollo-boost";


export const GetFiltersRU = gql`
    {
        getFilters{
            formats{
                ru
            }
            genres{
                ru
            }
            years
        }
    }
`;
export const GetFiltersEN = gql`
    {
        getFilters{
            formats{
                en
            }
            genres{
                en
            }
            years
        }
    }
`;
export const GetFiltersUK = gql`
    {
        getFilters{
            formats{
                uk
            }
            genres{
                uk
            }
            years
        }
    }
`;
