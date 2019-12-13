import { gql } from "apollo-boost";





export const GetSocials= gql`
    {
        getSocialList{
            id
            url
            name
            shortName
        }
    }
`;
