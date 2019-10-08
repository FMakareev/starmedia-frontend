import { gql } from "apollo-boost";




export const GetAboutUsRUQuery = gql`
    {
        getAboutUs {
            title {
                ru
            }
            content {
                ru
            }
            redBubble {
                ru
            }
            titleTVBroadcast {
                ru
            }
            titleTVBroadcastBabbles{
                title{
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
        getAboutUs {
            title {
                en
            }
            content {
                en
            }
            redBubble {
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
        getAboutUs {
            title {
                uk
            }
            content {
                uk
            }
            redBubble {
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
