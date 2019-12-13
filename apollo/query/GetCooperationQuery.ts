import {gql} from "apollo-boost";

export const GetCooperationRUQuery = gql`
    query{
        getCooperation{
            actors{
                form{
                    id
                    name{
                        ru
                    }
                    description{
                        ru
                    }
                }
                name{
                    ru
                }
                description{
                    ru
                }
            }
            scripts {
                form{
                    id
                    name{
                        ru
                    }
                    description{
                        ru
                    }
                }
                name{
                    ru
                }
                description{
                    ru
                }
            }
            director {
                form{
                    id
                    name{
                        ru
                    }
                    description{
                        ru
                    }
                }
                name{
                    ru
                }
                description{
                    ru
                }
            }
        }
    }
`;
export const GetCooperationENQuery = gql`
    {
        getCooperation {
            actors {
                form{
                    id
                    name{
                        ru
                    }
                    description{
                        ru
                    }
                }
                name{
                    ru
                }
                description{
                    ru
                }
            }
            scripts{
                form {
                    id
                    name {
                        en
                    }
                    description {
                        en
                    }
                }
                name {
                    en
                }
                description {
                    en
                }
            }
            director {
                form {
                    id
                    name {
                        en
                    }
                    description {
                        en
                    }
                }
                name {
                    en
                }
                description {
                    en
                }
            }
        }
    }
`;
export const GetCooperationUKQuery = gql`
    {
        getCooperation {
            actors {
                form {
                    type
                    name {
                        uk
                    }
                    description {
                        uk
                    }
                }
                name {
                    uk
                }
                description {
                    uk
                }
            }
            scripts{
                form {
                    type
                    name {
                        uk
                    }
                    description {
                        uk
                    }
                }
                name {
                    uk
                }
                description {
                    uk
                }
            }
            director {
                form {
                    type
                    name {
                        uk
                    }
                    description {
                        uk
                    }
                }
                name {
                    uk
                }
                description {
                    uk
                }
            }
        }
    }
`;
