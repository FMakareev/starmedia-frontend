import {gql} from "apollo-boost";

// TODO: getProject => getProjectPage

// TODO: twitterImage_alt -> twitterImageAlt
export const GetProjectRUQuery = gql`
    query ($slug: String!) {
        getProjectPage(slug: $slug) {
            project {
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
                title {
                    ru
                }
                description {
                    ru
                }
                trailer
                duration
                trailerPreview  {
                    xs{
                        url
                    }
                }
                trailerPreviewRu {
                    xs{
                        url
                    }
                }
                projectInfo {
                    genre {
                        ru
                    }
                    format {
                        ru
                    }
                    productionYear
                    numberOfEpisodes
                    productionDesigner {
                        ru
                    }
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
                    localizationUk
                    localizationRu
                    localizationEn
                }
                gallery {
                    xs{
                        url
                    }
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
                        xs{
                            url
                        }
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
                previewEn  {
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
                title {
                    en
                }
                description {
                    en
                }
                trailer
                duration
                trailerPreview {
                    xs{
                        url
                    }
                }
                trailerPreviewEn {
                    xs{
                        url
                    }
                }
                projectInfo {
                    genre {
                        en
                    }
                    format {
                        en
                    }
                    productionYear 
                    numberOfEpisodes
                    productionDesigner {
                        ru
                    }
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
                    localizationUk
                    localizationRu
                    localizationEn
                }
                gallery {
                    xs{
                        url
                    }
                }
                tags {
                    name {
                        en
                    }
                }
                similarProject {
                    slug
                    preview {
                        xs{
                            url
                        }
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
                preview  {
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
                previewUk  {
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
                title {
                    uk
                }
                description {
                    uk
                }
                trailer
                duration
                trailerPreview {
                    xs{
                        url
                    }
                }
                trailerPreviewUk {
                    xs{
                        url
                    }
                }
                projectInfo {
                    genre {
                        uk
                    }
                    format {
                        uk
                    }
                    productionYear 
                    numberOfEpisodes
                    productionDesigner {
                        ru
                    }
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
                    localizationUk
                    localizationRu
                    localizationEn
                }
                gallery {
                    xs{
                        url
                    }
                }
                tags {
                    name {
                        uk
                    }
                }
                similarProject {
                    slug
                    preview {
                        xs{
                            url
                        }
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
                    xs{
                        url
                    }
                }
                previewRu{
                    xs{
                        url
                    }
                }
                title {
                    ru
                }
                projectInfo {
                    genre {
                        ru
                    }
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
                    xs{
                        url
                    }
                }
                previewEn{
                    xs{
                        url
                    }
                }
                title{
                    en
                }
                projectInfo {
                    genre {
                        en
                    }
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
                    xs{
                        url
                    }
                }
                previewUk {
                    xs{
                        url
                    }
                }
                title {
                    uk
                }
                projectInfo {
                    genre {
                        uk
                    }
                }
            }
        }
    }

`;
