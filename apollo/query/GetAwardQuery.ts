import {gql} from "apollo-boost";


// TODO: twitterImageAlt -> twitterImageAlt

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
                twitterImageAlt {
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
                twitterImageAlt {
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
                twitterImageAlt {
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

/** PAGINATION */

export const AwardPaginationRU = gql`
    query($limit: Int, $page: Int, $locale: String){
        awardPagination(limit: $limit, page: $page, locale:$locale){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                date
                name{
                    ru
                }
            }
        }
    }
`;

export const AwardPaginationEN = gql`
    query($limit: Int, $page: Int, $locale: String){
        awardPagination(limit: $limit, page: $page, locale:$locale){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                date
                name{
                    en
                }
            }
        }
    }
`;

export const AwardPaginationUK = gql`
    query($limit: Int, $page: Int, $locale: String){
        awardPagination(limit: $limit, page: $page, locale:$locale){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                date
                name{
                    uk
                }
            }
        }
    }
`;
