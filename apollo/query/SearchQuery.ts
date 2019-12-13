import { gql } from "apollo-boost";





export const SearchQueryRU = gql`
    query($page: Int, $limit: Int, $query: String!){
        search(page:$page, limit: $limit, query:$query){
            projects {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    title{
                        ru
                    }
                    description{
                        ru
                    }
                }
            }
            news {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        ru
                    }
                    content{
                        ru
                    }
                }
            }
            awards {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        ru
                    }
                    content{
                        ru
                    }
                }
            }
        }
    }
`;



export const SearchQueryEN = gql`
    query($page: Int, $limit: Int, $query: String!){
        search(page:$page, limit: $limit, query:$query){
            projects {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    title{
                        en
                    }
                    description{
                        en
                    }
                }
            }
            news {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        en
                    }
                    content{
                        en
                    }
                }
            }
            awards {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        en
                    }
                    content{
                        en
                    }
                }
            }
        }
    }
`;

export const SearchQueryUK = gql`
    query($page: Int, $limit: Int, $query: String!){
        search(page:$page, limit: $limit, query:$query){
            projects {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    title{
                        uk
                    }
                    description{
                        uk
                    }
                }
            }
            news {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        uk
                    }
                    content{
                        uk
                    }
                }
            }
            awards {
                pageInfo {
                    currentPage
                    limit
                    nextPage
                    prevPage
                }
                count
                items {
                    slug
                    name{
                        uk
                    }
                    content{
                        uk
                    }
                }
            }
        }
    }
`;
