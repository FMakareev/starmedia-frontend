import { gql } from "apollo-boost";




export const GetAwardRUQuery = gql`
    query($slug: String!){
        getAward(slug: $slug) {
            name{
                ru
            }
            date
            description {
                ru
            }
            shortDescription{
                ru
            }
            content {
                ru
            }
            slug
            seoTags {
                description {
                    ru
                }
                keywords {
                    ru
                }
                title {
                    ru
                }
                ogUrl {
                    ru
                }
                ogImage {
                    ru
                }
                ogType {
                    ru
                }
                ogTitle {
                    ru
                }
                twitterSite {
                    ru
                }
                twitterImage {
                    ru
                }
                twitterImage_alt {
                    ru
                }
                twitterTitle {
                    ru
                }
                twitterDescription {
                    ru
                }
                twitterCard {
                    ru
                }
            }
        }
    }
`;

export const GetAwardENQuery = gql`
    query($slug: String!){
        getAward(slug: $slug) {
            name{
                en
            }
            date
            description {
                en
            }
            shortDescription{
                en
            }
            content {
                en
            }
            slug
            seoTags {
                description {
                    en
                }
                keywords {
                    en
                }
                title {
                    en
                }
                ogUrl {
                    en
                }
                ogImage {
                    en
                }
                ogType {
                    en
                }
                ogTitle {
                    en
                }
                twitterSite {
                    en
                }
                twitterImage {
                    en
                }
                twitterImage_alt {
                    en
                }
                twitterTitle {
                    en
                }
                twitterDescription {
                    en
                }
                twitterCard {
                    en
                }
            }
        }
    }
`;

export const GetAwardUKQuery = gql`
    query($slug: String!){
        getAward(slug: $slug) {
            name{
                uk
            }
            date
            description {
                uk
            }
            shortDescription{
                uk
            }
            content {
                uk
            }
            slug
            seoTags {
                description {
                    uk
                }
                keywords {
                    uk
                }
                title {
                    uk
                }
                ogUrl {
                    uk
                }
                ogImage {
                    uk
                }
                ogType {
                    uk
                }
                ogTitle {
                    uk
                }
                twitterSite {
                    uk
                }
                twitterImage {
                    uk
                }
                twitterImage_alt {
                    uk
                }
                twitterTitle {
                    uk
                }
                twitterDescription {
                    uk
                }
                twitterCard {
                    uk
                }
            }
        }
    }
`;
