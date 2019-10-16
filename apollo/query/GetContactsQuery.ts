import {gql} from "apollo-boost";



export const GetContactsQuery = gql`
    query {
        getContacts {
            mainContacts {
                locale
                name {
                    ru
                    en
                    uk
                }
                addresses {
                    gpsPoints {
                        lat
                        lng
                    }
                    addresses {
                        ru
                        en
                        uk
                    }
                }
                phones
                emails
                departaments {
                    name {
                        ru
                        en
                        uk
                    }
                    persons {
                        name {
                            ru
                            en
                            uk
                        }
                        emailss
                        phoness
                        company {
                            ru
                            en
                            uk
                        }
                        position {
                            ru
                            en
                            uk
                        }
                    }
                }
            }
        }
    }
`;

export const GetContactsENQuery = gql`
    {
        getContacts {
            mainContacts {
                locale
                name {
                    en
                }
                addresses {
                    gpsPoints {
                        lat
                        lng
                    }
                    addresses  {
                        en
                    }
                }
                phones 
                emails 
                departaments {
                    name  {
                        en
                    }
                    persons {
                        name {
                            en
                        }
                        emails
                        phones
                        company  {
                            en
                        }
                        position  {
                            en
                        }
                    }
                }
            }
        }
    }
`;

export const GetContactsRUQuery = gql`
    {
        getContacts {
            mainContacts {
                locale
                name {
                    ru
                }
                addresses {
                    gpsPoints {
                        lat
                        lng
                    }
                    addresses {
                        ru
                    }
                }
                phones 
                emails 
                departaments {
                    name {
                        ru
                    }
                    persons {
                        name {
                            ru
                        }
                        emails
                        phones
                        company {
                            ru
                        }
                        position {
                            ru
                        }
                    }
                }
            }
        }
    }
`;

export const GetContactsUKQuery = gql`
    {
        getContacts {
            mainContacts {
                locale
                name {
                    uk
                }
                addresses {
                    gpsPoints {
                        lat
                        lng
                    }
                    addresses {
                        uk
                    }
                }
                phones
                emails 
                departaments {
                    name {
                        uk
                    }
                    persons {
                        name {
                            uk
                        }
                        emails
                        phones
                        company {
                            uk
                        }
                        position {
                            uk
                        }
                    }
                }
            }
        }
    }
`;


