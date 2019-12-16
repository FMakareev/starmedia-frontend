import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";


export const GetHomePageRUQuery = gql`
    {
        getHomePage {
            watchOnline
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
                    description{
                        ru
                    }
                    name{
                        ru
                    }
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
        projectPaginationOnMain: projectPagination(limit: 9, page: 1, onHomePage: true){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewRu {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                title{
                    ru
                }
            }
        }
        projectPagination(limit: 9, page: 1, onHomePage: false){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewRu {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
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
            watchOnline
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
                    video {
                        url
                    }
                    preview {
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
                    description{
                        ru
                    }
                    name{
                        ru
                    }
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
        projectPaginationOnMain: projectPagination(limit: 9, page: 1, onHomePage: true){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewEn {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                title{
                    en
                }
            }
        }
        projectPagination(limit: 9, page: 1, onHomePage: false){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewEn {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
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
            watchOnline
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
                    video {
                        url
                    }
                    preview {
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
                    description{
                        ru
                    }
                    name{
                        ru
                    }
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
       
        projectPaginationOnMain: projectPagination(limit: 9, page: 1, onHomePage: true){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewUk {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                title{
                    uk
                }
            }
        }
        projectPagination(limit: 9, page: 1, onHomePage: false){
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
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                previewUk {
                    xs{
                        url
                    }
                    sm{
                        url
                    }
                    md{
                        url
                    }
                    lg{
                        url
                    }
                }
                title{
                    uk
                }
            }
        }
    }
`;



export const GetStarMediaSchoolLink = gql`
    {
        getHomePage{
            starSchool
        }
    }
`;


export const useGetStarMediaSchoolLink = () => useQuery(GetStarMediaSchoolLink);
