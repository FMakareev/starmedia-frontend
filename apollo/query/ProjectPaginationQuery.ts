import {gql} from "apollo-boost";

export const ProjectPaginationQuery = gql`
    query($page: Int, $limit: Int){
        projectPagination(page: $page, limit:$limit){
            pageInfo{
                currentPage
                limit
                nextPage
                prevPage
            }
            count
            items {
                id
                title {
                    ru
                }
                description{
                    ru
                }
                trailer{
                    id
                    ru {
                        preview {
                            url
                        }
                    }
                }
                awards{
                    id
                    name{
                        ru
                    }
                    date
                    description{
                        ru
                    }
                    shortDescription{
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


// 15-17
//
