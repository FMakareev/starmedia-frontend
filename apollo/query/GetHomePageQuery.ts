import {gql} from "apollo-boost";


export const GetHomePageRUQuery = gql`
    {
        getHomePage {
            mainSection {
                title {
                    ru
                }
                animatedText {
                    ru
                }
            }
            aboutUsSection {
                title {
                    ru
                }
                backgroundVideo{
                    video{
                        url
                    }
                    preview{
                        url
                    }
                }
            }
            orderCatalog {
                title {
                    ru
                }
                form {
                    id
                }
            }
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
        newsPagination(limit: 4, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                name{
                    ru
                }
            }
        }
        projectPagination(limit: 9, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                title{
                    ru
                }
            }
        }
    }
`;

export const GetHomePageENQuery = gql`
    {
        getHomePage {
            mainSection {
                title {
                    en
                }
                animatedText {
                    en
                }
            }
            aboutUsSection {
                title {
                    en
                }
                backgroundVideo{
                    video{
                        url
                    }
                    preview{
                        url
                    }
                }
            }
            orderCatalog {
                title {
                    en
                }
                form {
                    id
                }
            }
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
        newsPagination(limit: 4, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                name{
                    en
                }
            }
        }
        projectPagination(limit: 9, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                title{
                    en
                }
            }
        }
    }
`;

export const GetHomePageUKQuery = gql`
    {
        getHomePage {
            mainSection {
                title {
                    uk
                }
                animatedText {
                    uk
                }
            }
            aboutUsSection {
                title {
                    uk
                }
                backgroundVideo{
                    video{
                        url
                    }
                    preview{
                        url
                    }
                }
            }
            orderCatalog {
                title {
                    uk
                }
                form {
                    id
                }
            }
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
        newsPagination(limit: 4, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                name{
                    uk
                }
            }
        }
        projectPagination(limit: 9, page: 1){
            pageInfo {
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                slug
                preview {
                    url
                }
                title{
                    uk
                }
            }
        }
    }
`;
