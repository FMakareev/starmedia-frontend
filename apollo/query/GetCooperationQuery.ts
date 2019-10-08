import {gql} from "apollo-boost";

export const GetCooperationRUQuery = gql`
    {
        getCooperation {
            actors {
                form {
                    type
                    name {
                        ru
                    }
                    description {
                        ru
                    }
                }
                name {
                    ru
                }
                description {
                    ru
                }
            }
            scripts {
                form {
                    type
                    name {
                        ru
                    }
                    description {
                        ru
                    }
                }
                name {
                    ru
                }
                description {
                    ru
                }
            }
            director {
                form {
                    type
                    name {
                        ru
                    }
                    description {
                        ru
                    }
                }
                name {
                    ru
                }
                description {
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
                form {
                    type
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
            scripts{
                form {
                    type
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
                    type
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
