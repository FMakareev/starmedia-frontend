import {gql} from "apollo-boost";


export const GetProjectRUQuery = gql`
    query ($slug: String!) {
        getProject(slug: $slug) {
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
                trailer {
                    preview {
                        url
                    }
                    video
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

export const GetProjectENQuery = gql`
    query ($slug: String!) {
        getProject(slug: $slug) {
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
                trailer {
                    preview {
                        url
                    }
                    video
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
export const GetProjectUKQuery = gql`
    query ($slug: String!) {
        getProject(slug: $slug) {
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
                trailer {
                    preview {
                        url
                    }
                    video
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
