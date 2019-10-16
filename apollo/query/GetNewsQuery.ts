import { gql } from "apollo-boost";


export const GetNewsRUQuery = gql`
    query ($slug: String!) {
        getNews(slug: $slug) {
            name {
                ru
            }
            date
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
export const GetNewsENQuery = gql`
    query ($slug: String!) {
        getNews(slug: $slug) {
            name {
                en
            }
            date
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
export const GetNewsUKQuery = gql`
    query ($slug: String!) {
        getNews(slug: $slug) {
            name {
                uk
            }
            date
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

export const NewsPaginationRU = gql`
    query($limit: Int, $page: Int){
        newsPagination(limit: $limit, page: $page){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                name{
                    ru
                }
                info{
                    ru
                }
                preview{
                    url
                }
                date
                slug
            }
        }
    }
`;

export const NewsPaginationEN = gql`
    query($limit: Int, $page: Int){
        newsPagination(limit: $limit, page: $page){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                preview{
                    url
                }
                name{
                    en
                }
                info{
                    en
                }
                slug
                date
            }
        }
    }
`;

export const NewsPaginationUK = gql`
    query($limit: Int, $page: Int){
        newsPagination(limit: $limit, page: $page){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                preview{
                    url
                }
                name{
                    uk
                }
                info{
                    uk
                }
                date
                slug
            }
        }
    }
`;


//



export const GetNextNewsRU = gql`
    query ($slug: String!) {
        getNextNews(slug: $slug) {
            name {
                ru
            }
            info {
                ru
            }
            date
            slug
        }
    }
`;

export const GetNextNewsEN = gql`
    query ($slug: String!) {
        getNextNews(slug: $slug) {
            name {
                en
            }
            info {
                en
            }
            date
            slug
        }
    }
`;


export const GetNextNewsUK = gql`
    query ($slug: String!) {
        getNextNews(slug: $slug) {
            name {
                uk
            }
            info {
                uk
            }
            date
            slug
        }
    }
`;
