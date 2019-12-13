import { gql } from "apollo-boost";




export const GetAboutUsRUQuery = gql`
    {
        getAboutUsPage {
            title {
                ru
            }
            content {
                ru
            }
            redBabble {
                ru
            }
            titleTVBroadcast {
                ru
            }
            titleTVBroadcastBabbles {
                title {
                    ru
                }
                content {
                    ru
                }
            }
        }
    }
`;

export const GetAboutUsENQuery = gql`
    {
        getAboutUsPage {
            title {
                en
            }
            content {
                en
            }
            redBabble {
                en
            }
            titleTVBroadcast {
                en
            }
            titleTVBroadcastBabbles{
                title{
                    en
                }
                content {
                    en
                }
            }
        }
    }
`;

export const GetAboutUsUKQuery = gql`
    {
        getAboutUsPage {
            title {
                uk
            }
            content {
                uk
            }
            redBabble {
                uk
            }
            titleTVBroadcast {
                uk
            }
            titleTVBroadcastBabbles{
                title{
                    uk
                }
                content {
                    uk
                }
            }
        }
    }
`;
