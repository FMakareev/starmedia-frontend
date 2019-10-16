import {gql} from "apollo-boost";

// TODO: getProject => getProjectPage

// TODO: twitterImage_alt -> twitterImageAlt
export const GetProjectRUQuery = gql`
    query ($slug: String!) {
        getProjectPage(slug: $slug) {
            project {
                slug
                preview {
                    url
                }
                title {
                    ru
                }
                description {
                    ru
                }
                trailer
#                preview {
#                    url
#                }
                projectInfo {
                    genre {
                        ru
                    }
                    format {
                        ru
                    }
                    productionYear
                    numberOfEpisodes
                    directors {
                        ru
                    }
                    scenario {
                        ru
                    }
                    operator {
                        ru
                    }
                    composer {
                        ru
                    }
                    producer {
                        ru
                    }
                    cast {
                        ru
                    }
                }
                awards {
                    name {
                        ru
                    }
                    slug
                    date
                }
                gallery {
                    url
                }
                tags {
                    name {
                        ru
                    }
                }
                similarProject {
                    slug
                    projectInfo {
                        genre {
                            ru
                        }
                    }
                    preview {
                        url
                    }
                    title {
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
    }

`;

export const GetProjectENQuery = gql`
    query ($slug: String!) {
        getProjectPage(slug: $slug) {
            project {
                slug
                preview {
                    url
                }
                title {
                    en
                }
                description {
                    en
                }
                trailer
#                preview {
#                    url
#                }
                projectInfo {
                    genre {
                        en
                    }
                    format {
                        en
                    }
                    productionYear 
                    numberOfEpisodes
                    directors {
                        en
                    }
                    scenario {
                        en
                    }
                    operator {
                        en
                    }
                    composer {
                        en
                    }
                    producer {
                        en
                    }
                    cast {
                        en
                    }
                }
                awards {
                    name {
                        en
                    }
                    slug
                    date
                }
                gallery {
                    url
                }
                tags {
                    name {
                        en
                    }
                }
                similarProject {
                    slug
                    preview {
                        url
                    }
                    projectInfo {
                        genre {
                            en
                        }
                    }
                    title {
                        en
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
    }

`;
export const GetProjectUKQuery = gql`
    query ($slug: String!) {
        getProjectPage(slug: $slug) {
            project {
                slug
                preview {
                    url
                }
                title {
                    uk
                }
                description {
                    uk
                }
                trailer
#                preview {
#                    url
#                }
                projectInfo {
                    genre {
                        uk
                    }
                    format {
                        uk
                    }
                    productionYear 
                    numberOfEpisodes
                    directors {
                        uk
                    }
                    scenario {
                        uk
                    }
                    operator {
                        uk
                    }
                    composer {
                        uk
                    }
                    producer {
                        uk
                    }
                    cast {
                        uk
                    }
                }
                awards {
                    name {                        
                        uk
                    }
                    slug
                    date
                }
                gallery {
                    url
                }
                tags {
                    name {
                        uk
                    }
                }
                similarProject {
                    slug
                    preview {
                        url
                    }
                    projectInfo {
                        genre {
                            uk
                        }
                    }
                    title {
                        uk
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
    }
`;




/** PAGINATION */

export const ProjectPaginationRU = gql`
    query ($limit: Int, $page: Int, $genre: String, $format: String, $year: Int, $query: String) {
        projectPagination(limit: $limit, page: $page, genre: $genre, format: $format, year: $year, query: $query) {
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
                title {
                    ru
                }
            }
        }
    }

`;

export const ProjectPaginationEN = gql`
    query ($limit: Int, $page: Int, $genre: String, $format: String, $year: Int, $query: String) {
        projectPagination(limit: $limit, page: $page, genre: $genre, format: $format, year: $year, query: $query) {
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

export const ProjectPaginationUK = gql`
    query ($limit: Int, $page: Int, $genre: String, $format: String, $year: Int, $query: String) {
        projectPagination(limit: $limit, page: $page, genre: $genre, format: $format, year: $year, query: $query) {
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
                title {
                    uk
                }
            }
        }
    }

`;
