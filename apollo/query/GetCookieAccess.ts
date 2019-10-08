import {gql} from "apollo-boost";


export const GetCookieAccessRUQuery = gql`
    {
        getCookieAccess {
            description {
                ru
            }
        }
    }
`;

export const GetCookieAccessENQuery = gql`
    {
        getCookieAccess {
            description {
                en
            }
        }
    }
`;

export const GetCookieAccessUKQuery = gql`
    {
        getCookieAccess {
            description {
                uk
            }
        }
    }
`;
